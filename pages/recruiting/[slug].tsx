import { fetcher, getAllNavigations, getFooter } from '@lib/contentful';
import { Layout } from '@components/common';
import {
  RecruitingView,
  recruitingViewDescriptionFragment,
  recruitingViewPostFragment,
  recruitingViewCategoriesFragment,
} from '@components/recruiting';
import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import type {
  GetRecruitingSingleQuery,
  GetRecruitingSinglePathsQuery,
} from 'types/schema';

const getRecruitingSingle = /* GraphQL */ `
  query GetRecruitingSingle(
    $locale: String!
    $slug: String!
    $preview: Boolean = false
  ) {
    homeCollection(
      locale: $locale
      where: { slug: "home" }
      preview: $preview
      limit: 1
    ) {
      items {
        ...RecruitingViewDescription
      }
    }
    recruitingCollection(
      locale: $locale
      where: { slug: $slug }
      preview: $preview
      limit: 1
    ) {
      items {
        ...RecruitingViewPost
      }
    }
    recruitingAllPosts: recruitingCollection(
      locale: $locale
      preview: $preview
    ) {
      items {
        ...RecruitingViewCategories
      }
    }
  }

  ${recruitingViewDescriptionFragment}
  ${recruitingViewPostFragment}
  ${recruitingViewCategoriesFragment}
`;

const getRecruitingSinglePaths = /* GraphQL */ `
  query GetRecruitingSinglePaths {
    recruitingCollection {
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
  const promise = fetcher<GetRecruitingSingleQuery>({
    query: getRecruitingSingle,
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

  const home = data?.homeCollection?.items?.[0];
  const post = data?.recruitingCollection?.items?.[0];
  const allPosts = data.recruitingAllPosts?.items;

  if (!post) {
    // We throw to make sure this fails at build time as this is never expected to happen
    // throw new Error(`Recruiting post with slug '${slug}' not found`);
    return {
      notFound: true,
    };
  }

  return {
    props: { home, post, allPosts, allNavigations, footer: footerData.footer },
    revalidate: 60 * 60, // Every hour
  };
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const postsPromise = fetcher<GetRecruitingSinglePathsQuery>({
    query: getRecruitingSinglePaths,
    site: 'labo',
  });
  const [postsData] = await Promise.all([postsPromise]);
  const paths = postsData?.recruitingCollection?.items?.flatMap((item) => {
    return locales?.map((locale) => {
      return {
        params: { slug: item?.slug },
        locale,
      };
    });
  });

  return {
    paths,
    // Fallback shouldn't be enabled here or otherwise this route
    // will catch every page, even 404s, and we don't want that
    fallback: 'blocking',
  };
}

export default function Post({
  home,
  post,
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <RecruitingView home={home} post={post} allPosts={allPosts} />;
}

Post.Layout = Layout;
