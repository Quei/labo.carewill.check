import {
  fetcher,
  getAllNavigations,
  getSiblingsInterviews,
  getFooter,
} from '@lib/contentful';
import { useIsInterviewsLogin } from '@lib/hooks/useIsInterviewsLogin';
import { Layout } from '@components/common';
import {
  InterviewsSingleView,
  interviewsSingleViewPostFragment,
  LoginView,
} from '@components/interviews';
import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import type {
  GetInterviewsSingleQuery,
  GetInterviewsSinglePathsQuery,
} from 'types/schema';

const getInterviewsSingle = /* GraphQL */ `
  query GetInterviewsSingle(
    $locale: String!
    $slug: String!
    $preview: Boolean = false
  ) {
    interviewCollection(
      locale: $locale
      where: { slug: $slug }
      preview: $preview
      limit: 1
    ) {
      items {
        date
        series {
          slug
        }
        ...InterviewsSingleViewPost
      }
    }
  }

  ${interviewsSingleViewPostFragment}
`;

const getInterviewsSinglePaths = /* GraphQL */ `
  query GetInterviewsSinglePaths {
    interviewCollection {
      items {
        slug
      }
    }
  }
`;

export async function getStaticProps({
  preview,
  params,
  locale,
  locales,
}: GetStaticPropsContext<{ slug: string }>) {
  const slug = params?.slug;
  const promise = fetcher<GetInterviewsSingleQuery>({
    query: getInterviewsSingle,
    variables: {
      locale,
      slug,
      preview,
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

  const post = data?.interviewCollection?.items?.[0];

  const siblingsPosts = await getSiblingsInterviews({
    locale,
    preview,
    date: post?.date,
    slug,
    seriesSlug: post?.series?.slug,
  });

  if (!post) {
    // We throw to make sure this fails at build time as this is never expected to happen
    // throw new Error(`Recruiting post with slug '${slug}' not found`);
    return {
      notFound: true,
    };
  }

  return {
    props: { post, siblingsPosts, allNavigations, footer: footerData.footer },
    revalidate: 60 * 60, // Every hour
  };
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const postsPromise = fetcher<GetInterviewsSinglePathsQuery>({
    query: getInterviewsSinglePaths,
    site: 'labo',
  });
  const [postsData] = await Promise.all([postsPromise]);
  const paths = postsData?.interviewCollection?.items?.flatMap((item) => {
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

export default function Post({
  post,
  siblingsPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isLoading, isLogin, setIsLogin } = useIsInterviewsLogin();
  return (
    <>
      {!isLoading && !isLogin && <LoginView setIsLogin={setIsLogin} />}
      {!isLoading && isLogin && (
        <InterviewsSingleView post={post} siblingsPosts={siblingsPosts} />
      )}
    </>
  );
}

Post.Layout = Layout;
