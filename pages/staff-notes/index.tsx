import {
  fetcher,
  getAllNavigations,
  getAllStaffNotes,
  getAllCategories,
  getFooter,
} from '@lib/contentful';
import { Layout } from '@components/common';
import {
  StaffNotesArchiveView,
  staffNotesArchiveViewDescriptionFragment,
} from '@components/staff-notes';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import type { GetStaffNotesArchiveQuery } from 'types/schema';

const getStaffNotesArchive = /* GraphQL */ `
  query GetStaffNotesArchive($locale: String!, $preview: Boolean = false) {
    homeCollection(
      locale: $locale
      where: { slug: "home" }
      preview: $preview
      limit: 1
    ) {
      items {
        ...StaffNotesArchiveViewDescription
      }
    }
  }

  ${staffNotesArchiveViewDescriptionFragment}
`;

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const promise = fetcher<GetStaffNotesArchiveQuery>({
    query: getStaffNotesArchive,
    variables: {
      locale,
      preview,
    },
    site: 'labo',
  });

  // NOTE:
  // category(pages/staff-notes/category/[slug].tsx)と合わせて、
  // こちらも、一旦全て取得するようにする。
  const allStaffNotesPromise = getAllStaffNotes({
    locale,
    preview,
  });
  const allCategoriesPromise = getAllCategories({
    locale,
    preview,
  });
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
  const { posts } = allStaffNotes;
  const { categories } = allCategories;

  return {
    props: {
      home,
      posts,
      categories,
      allNavigations,
      footer: footerData.footer,
    },
    revalidate: 60 * 60, // Every hour
  };
}

export default function Posts({
  home,
  posts,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <StaffNotesArchiveView
        home={home}
        posts={posts}
        categories={categories}
      />
    </>
  );
}

Posts.Layout = Layout;
