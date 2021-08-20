import { fetcher } from '@lib/contentful';
import { staffNotesSingleViewSiblingsPostsFragment } from '@components/staff-notes';
import type { GetStaticPropsContext } from 'next';
import type { GetSiblingsStaffNotesQuery } from 'types/schema';

const getSiblingsStaffNotesQuery = /* GraphQL */ `
  query GetSiblingsStaffNotes(
    $locale: String!
    $preview: Boolean = false
    $date: DateTime!
  ) {
    previous: staffNoteCollection(
      locale: $locale
      preview: $preview
      limit: 1
      order: date_DESC
      where: { date_lt: $date }
    ) {
      items {
        ...staffNotesSingleViewSiblingsPosts
      }
    }
    next: staffNoteCollection(
      locale: $locale
      preview: $preview
      limit: 1
      order: date_ASC
      where: { date_gt: $date }
    ) {
      items {
        ...staffNotesSingleViewSiblingsPosts
      }
    }
  }

  ${staffNotesSingleViewSiblingsPostsFragment}
`;

type GetSiblingsStaffNotes = Pick<
  GetStaticPropsContext,
  'locale' | 'preview'
> & {
  date: string;
};
export const getSiblingsStaffNotes = async ({
  locale,
  preview,
  date,
}: GetSiblingsStaffNotes) => {
  const response = await fetcher<GetSiblingsStaffNotesQuery>({
    query: getSiblingsStaffNotesQuery,
    variables: {
      locale,
      preview,
      date,
    },
    site: 'labo',
  });

  const previous = response?.previous?.items?.[0] ?? null;
  const next = response?.next?.items?.[0] ?? null;

  return {
    previous,
    next,
  };
};
