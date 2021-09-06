import { sleep } from '@lib/sleep';
import { fetcher } from '@lib/contentful';
import { staffNotesArchiveViewPostWithIdFragment } from '@components/staff-notes';
import type { GetStaticPropsContext } from 'next';
import type { GetAllStaffNotesByCategoryQuery } from 'types/schema';

const getAllStaffNotesByCategoryQuery = /* GraphQL */ `
  query GetAllStaffNotesByCategory(
    $locale: String!
    $preview: Boolean = false
    $slug: String!
    $limit: Int = 100
    $skip: Int = 0
  ) {
    categoryCollection(
      locale: $locale
      preview: $preview
      limit: 1
      where: { slug: $slug }
    ) {
      items {
        title
        linkedFrom(allowedLocales: ["ja", "en"]) {
          staffNoteCollection(preview: $preview, limit: $limit, skip: $skip) {
            total
            items {
              ...staffNotesArchiveViewPostWithId
            }
          }
        }
      }
    }
  }

  ${staffNotesArchiveViewPostWithIdFragment}
`;

type GetAllStaffNotesByCategory = Pick<
  GetStaticPropsContext,
  'locale' | 'preview'
> & {
  slug?: string;
};
export const getAllStaffNotesByCategory = async ({
  locale,
  preview,
  slug,
}: GetAllStaffNotesByCategory) => {
  const limit = 100;
  let categoryTitle = '';
  let page = 0;
  let shouldQueryMorePosts = true;
  const posts = [];

  while (shouldQueryMorePosts) {
    const response = await fetcher<GetAllStaffNotesByCategoryQuery>({
      query: getAllStaffNotesByCategoryQuery,
      variables: {
        locale,
        preview,
        slug,
        limit,
        skip: page * limit,
      },
      site: 'labo',
    });

    const category = response?.categoryCollection?.items?.[0];
    if (!categoryTitle) {
      categoryTitle = category?.title ?? '';
    }
    const staffNoteCollection = category?.linkedFrom?.staffNoteCollection;

    if (staffNoteCollection?.items?.length) {
      posts.push(...staffNoteCollection.items);
      shouldQueryMorePosts = posts.length < staffNoteCollection.total;
    } else {
      shouldQueryMorePosts = false;
    }

    await sleep(300);
    page++;
  }

  // NOTE:
  // sortする。
  posts.sort((a, b) => {
    const aDate = new Date(a?.date);
    const bDate = new Date(b?.date);
    return bDate > aDate ? 1 : bDate < aDate ? -1 : 0;
  });

  return {
    categoryTitle,
    posts,
  };
};
