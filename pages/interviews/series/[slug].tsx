import { fetcher, getAllNavigations, getFooter } from '@lib/contentful';
import { Layout } from '@components/common';
import {
  InterviewsSeriesArchiveView,
  interviewsSeriesArchiveViewPageFragment,
  interviewsSeriesArchiveViewPostWithIdFragment,
} from '@components/interviews';
import type {
  GetStaticPropsContext,
  GetStaticPathsContext,
  InferGetStaticPropsType,
} from 'next';
import type {
  GetInterviewsSeriesArchiveQuery,
  GetInterviewsSeriesArchivePathsQuery,
} from 'types/schema';

const getInterviewsSeriesArchive = /* GraphQL */ `
  query GetInterviewsSeriesArchive(
    $locale: String!
    $preview: Boolean = false
    $slug: String!
  ) {
    interviewSeriesCollection(
      locale: $locale
      preview: $preview
      where: { slug: $slug }
      limit: 1
    ) {
      items {
        ...InterviewsSeriesArchiveViewPage
      }
    }
    interviewCollection(
      locale: $locale
      preview: $preview
      where: { series: { slug: $slug } }
      order: date_DESC
      limit: 100
    ) {
      items {
        ...InterviewsSeriesArchiveViewPostWithId
      }
    }
  }

  ${interviewsSeriesArchiveViewPageFragment}
  ${interviewsSeriesArchiveViewPostWithIdFragment}
`;

const getInterviewsSeriesArchivePaths = /* GraphQL */ `
  query GetInterviewsSeriesArchivePaths {
    interviewSeriesCollection {
      items {
        slug
      }
    }
  }
`;

export async function getStaticProps({
  preview,
  locale,
  params,
}: GetStaticPropsContext) {
  const slug = params?.slug;
  const promise = fetcher<GetInterviewsSeriesArchiveQuery>({
    query: getInterviewsSeriesArchive,
    variables: {
      locale,
      preview,
      slug,
    },
    site: 'labo',
  });

  const allNavigationsPromise = getAllNavigations({ locale, preview });
  const footerPromise = getFooter({ locale, preview });
  const [data, allNavigations, footerData] = await Promise.all([
    promise,
    allNavigationsPromise,
    footerPromise,
  ]);

  const series = data?.interviewSeriesCollection?.items?.[0];
  const posts = data?.interviewCollection?.items;

  return {
    props: {
      series,
      posts,
      allNavigations,
      footer: footerData.footer,
    },
    revalidate: 60 * 60, // Every hour
  };
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const postsPromise = fetcher<GetInterviewsSeriesArchivePathsQuery>({
    query: getInterviewsSeriesArchivePaths,
    site: 'labo',
  });
  const [postsData] = await Promise.all([postsPromise]);
  const paths = postsData?.interviewSeriesCollection?.items?.flatMap((item) => {
    return locales?.map((locale) => {
      return {
        params: { slug: item?.slug },
        locale,
      };
    });
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export default function Posts({
  series,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <InterviewsSeriesArchiveView series={series} posts={posts} />
    </>
  );
}

Posts.Layout = Layout;
