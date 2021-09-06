import { sleep } from '@lib/sleep';
import { nonNullableFilter } from '@lib/non-nullable-filter';
import { fetcher } from '@lib/contentful';
import type { GetStaticPropsContext } from 'next';
import type {
  GetAllStaffNotesForSitemapQuery,
  GetAllCategoriesForSitemapQuery,
} from 'types/schema';

const getAllStaffNotesForSitemapQuery = /* GraphQL */ `
  query GetAllStaffNotesForSitemap($limit: Int = 100, $skip: Int = 0) {
    staffNoteCollection(
      locale: "ja"
      preview: false
      limit: $limit
      skip: $skip
      order: date_DESC
    ) {
      total
      items {
        sys {
          publishedAt
        }
        slug
      }
    }
  }
`;

const getAllCategoriesForSitemapQuery = /* GraphQL */ `
  query GetAllCategoriesForSitemap($limit: Int = 100, $skip: Int = 0) {
    categoryCollection(
      locale: "ja"
      preview: false
      limit: $limit
      skip: $skip
      order: date_DESC
    ) {
      total
      items {
        sys {
          publishedAt
        }
        slug
      }
    }
  }
`;

const fetch = async ({ query }: { query: string }) => {
  const limit = 100;
  let page = 0;
  let shouldQueryMorePosts = true;
  const posts = [];

  while (shouldQueryMorePosts) {
    const response = await fetcher<
      GetAllStaffNotesForSitemapQuery | GetAllCategoriesForSitemapQuery
    >({
      query,
      variables: {
        limit,
        skip: page * limit,
      },
      site: 'labo',
    });

    const collection =
      'staffNoteCollection' in response
        ? response.staffNoteCollection
        : 'categoryCollection' in response
        ? response.categoryCollection
        : null;

    if (collection?.items?.length) {
      posts.push(...collection.items);
      shouldQueryMorePosts = posts.length < collection.total;
    } else {
      shouldQueryMorePosts = false;
    }

    sleep(300);

    page++;
  }

  return posts;
};

export const getDynamicPagesForSitemap = async ({
  locales,
  baseUrl,
}: Pick<GetStaticPropsContext, 'locales'> & { baseUrl: string }) => {
  const rawStaffNotes = await fetch({
    query: getAllStaffNotesForSitemapQuery,
  });
  const staffNotes = rawStaffNotes
    .map((item) => {
      return locales?.map((locale) => {
        const slug = item?.slug;
        const basePath = '/staff-notes';
        return {
          url:
            locale === 'ja'
              ? `${baseUrl}${basePath}/${slug}`
              : `${baseUrl}/${locale}${basePath}/${slug}`,
          publishedAt: item?.sys.publishedAt as string,
        };
      });
    })
    .flatMap((item) => item);

  const rawCategories = await fetch({
    query: getAllCategoriesForSitemapQuery,
  });

  const categories = rawCategories
    .map((item) => {
      return locales?.map((locale) => {
        const slug = item?.slug;
        const basePath = '/staff-notes/category';
        return {
          url:
            locale === 'ja'
              ? `${baseUrl}${basePath}/${slug}`
              : `${baseUrl}/${locale}${basePath}/${slug}`,
          publishedAt: item?.sys.publishedAt as string,
        };
      });
    })
    .flatMap((item) => item);

  const dynamicPages = [...staffNotes, ...categories].filter(nonNullableFilter);

  return dynamicPages;
};
