import { nonNullableFilter } from '@lib/non-nullable-filter';
import { fetchAll } from '@lib/contentful/utils/fetch-all';
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

const pickCollection = <C>(
  response: GetAllStaffNotesForSitemapQuery | GetAllCategoriesForSitemapQuery
) => {
  if ('staffNoteCollection' in response) {
    return response.staffNoteCollection as C | undefined;
  } else if ('categoryCollection' in response) {
    return response.categoryCollection as C | undefined;
  }
  return null;
};

export const getDynamicPagesForSitemap = async ({
  locales,
  baseUrl,
}: Pick<GetStaticPropsContext, 'locales'> & {
  baseUrl: string;
}) => {
  const rawStaffNotes = await fetchAll<
    GetAllStaffNotesForSitemapQuery,
    NonNullable<GetAllStaffNotesForSitemapQuery['staffNoteCollection']>
  >({
    site: 'labo',
    query: getAllStaffNotesForSitemapQuery,
    pickCollection,
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

  const rawCategories = await fetchAll<
    GetAllCategoriesForSitemapQuery,
    NonNullable<GetAllCategoriesForSitemapQuery['categoryCollection']>
  >({
    site: 'labo',
    query: getAllCategoriesForSitemapQuery,
    pickCollection,
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
