import { fetcher, getAllNavigations, getAllStaffNotes } from '@lib/contentful';
import { Layout } from '@components/common';
import {
  StaffNotesArchiveView,
  staffNotesArchiveViewCategoryFragment,
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
        ...staffNotesArchiveViewDescription
      }
    }
    categoryCollection(locale: $locale, preview: $preview) {
      items {
        ...staffNotesArchiveViewCategory
      }
    }
  }

  ${staffNotesArchiveViewDescriptionFragment}
  ${staffNotesArchiveViewCategoryFragment}
`;

export async function getStaticProps({
  preview,
  params,
  locale,
  locales,
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
  // categoryと合わせて、
  // こちらも、一旦全て取得するようにする。
  const allStaffNotesPromise = getAllStaffNotes({
    locale,
    preview,
  });
  const allNavigationsPromise = getAllNavigations({ locale, preview });
  const [data, allStaffNotes, allNavigations] = await Promise.all([
    promise,
    allStaffNotesPromise,
    allNavigationsPromise,
  ]);

  const home = data?.homeCollection?.items?.[0];
  const { posts } = allStaffNotes;
  const categories = data?.categoryCollection?.items;

  return {
    props: { home, posts, categories, allNavigations },
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
