import {
  fetcher,
  getAllNavigations,
  getAllStaffNotesByCategory,
  getAllCategories,
  getFooter,
} from '@lib/contentful';
import { Layout } from '@components/common';
import {
  StaffNotesArchiveView,
  staffNotesArchiveViewCategoryFragment,
  staffNotesArchiveViewDescriptionFragment,
} from '@components/staff-notes';
import type {
  GetStaticPropsContext,
  GetStaticPathsContext,
  InferGetStaticPropsType,
} from 'next';
import type {
  GetStaffNotesArchiveCategoryQuery,
  GetStaffNotesArchiveCategoryPathsQuery,
} from 'types/schema';

const getStaffNotesArchiveCategory = /* GraphQL */ `
  query GetStaffNotesArchiveCategory(
    $locale: String!
    $preview: Boolean = false
  ) {
    homeCollection(
      locale: $locale
      where: { slug: "home" }
      preview: $preview
      limit: 1
    ) {
      items {
        ...staffNotesArchiveViewDescription
      }
    }
  }

  ${staffNotesArchiveViewDescriptionFragment}
`;

const getStaffNotesArchiveCategoryPaths = /* GraphQL */ `
  query GetStaffNotesArchiveCategoryPaths {
    categoryCollection {
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
  const promise = fetcher<GetStaffNotesArchiveCategoryQuery>({
    query: getStaffNotesArchiveCategory,
    variables: {
      locale,
      preview,
    },
    site: 'labo',
  });

  // NOTE:
  // contentfulのcategory経由（linkedFrom）で取得する場合、
  // orderが指定できないので、
  // 全て取得してから、自分でsortする。
  // もし今後graphql上で、orderができるようになれば、
  // そちらを使用する。
  // https://stackoverflow.com/questions/67398129/how-to-order-a-linked-collection-with-the-contentful-graphql-api

  const allStaffNotesPromise = getAllStaffNotesByCategory({
    locale,
    preview,
    slug,
  });
  const allCategoriesPromise = getAllCategories({ locale, preview });
  const allNavigationsPromise = getAllNavigations({ locale, preview });
  const footerPromise = getFooter({ locale, preview });
  const [data, allStaffNotes, allCategories, allNavigations, footerData] =
    await Promise.all([
      promise,
      allStaffNotesPromise,
      allCategoriesPromise,
      allNavigationsPromise,
      footerPromise,
    ]);

  const home = data?.homeCollection?.items?.[0];
  const { categoryTitle, posts } = allStaffNotes;
  const { categories } = allCategories;

  return {
    props: {
      home,
      category: categoryTitle,
      posts,
      categories,
      allNavigations,
      footer: footerData.footer,
    },
    revalidate: 60 * 60, // Every hour
  };
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const promise = fetcher<GetStaffNotesArchiveCategoryPathsQuery>({
    query: getStaffNotesArchiveCategoryPaths,
    site: 'labo',
  });
  const [data] = await Promise.all([promise]);
  const paths = data?.categoryCollection?.items?.flatMap((item) => {
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

export default function Posts({
  home,
  category,
  posts,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <StaffNotesArchiveView
      home={home}
      category={category}
      posts={posts}
      categories={categories}
    />
  );
}

Posts.Layout = Layout;
