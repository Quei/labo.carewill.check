import { fetchAll } from '@lib/contentful/utils/fetch-all';
import { staffNotesArchiveViewPostWithIdFragment } from '@components/staff-notes';
import type { GetStaticPropsContext } from 'next';
import type { GetAllStaffNotesQuery } from 'types/schema';

const getAllStaffNotesQuery = /* GraphQL */ `
  query GetAllStaffNotes(
    $locale: String!
    $preview: Boolean = false
    $limit: Int = 100
    $skip: Int = 0
  ) {
    staffNoteCollection(
      locale: $locale
      preview: $preview
      limit: $limit
      skip: $skip
      order: date_DESC
    ) {
      total
      items {
        ...staffNotesArchiveViewPostWithId
      }
    }
  }

  ${staffNotesArchiveViewPostWithIdFragment}
`;

const pickCollection = <C>(response: GetAllStaffNotesQuery) => {
  if ('staffNoteCollection' in response) {
    return response.staffNoteCollection as C | undefined;
  }
  return null;
};

export const getAllStaffNotes = async ({
  locale,
  preview,
}: Pick<GetStaticPropsContext, 'locale' | 'preview'>) => {
  const posts = await fetchAll<
    GetAllStaffNotesQuery,
    NonNullable<GetAllStaffNotesQuery['staffNoteCollection']>
  >({
    site: 'labo',
    query: getAllStaffNotesQuery,
    locale,
    preview,
    pickCollection,
  });

  return {
    posts,
  };
};
