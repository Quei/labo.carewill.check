import { sleep } from '@lib/sleep';
import { fetcher } from '@lib/contentful';
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

type GetAllStaffNotes = Pick<GetStaticPropsContext, 'locale' | 'preview'>;
export const getAllStaffNotes = async ({
  locale,
  preview,
}: GetAllStaffNotes) => {
  const limit = 100;
  let page = 0;
  let shouldQueryMorePosts = true;
  const posts = [];

  while (shouldQueryMorePosts) {
    const response = await fetcher<GetAllStaffNotesQuery>({
      query: getAllStaffNotesQuery,
      variables: {
        locale,
        preview,
        limit,
        skip: page * limit,
      },
      site: 'labo',
    });

    const staffNoteCollection = response?.staffNoteCollection;

    if (staffNoteCollection?.items?.length) {
      posts.push(...staffNoteCollection.items);
      shouldQueryMorePosts = posts.length < staffNoteCollection.total;
    } else {
      shouldQueryMorePosts = false;
    }

    sleep(300);

    page++;
  }

  return {
    posts,
  };
};
