import { fetchAll } from '@lib/contentful/utils/fetch-all';
import { staffNotesArchiveViewCategoryFragment } from '@components/staff-notes';
import type { GetStaticPropsContext } from 'next';
import type { GetAllCategoriesQuery } from 'types/schema';

const getAllCategoriesQuery = /* GraphQL */ `
  query GetAllCategories(
    $locale: String!
    $preview: Boolean = false
    $limit: Int = 100
    $skip: Int = 0
  ) {
    categoryCollection(
      locale: $locale
      preview: $preview
      limit: $limit
      skip: $skip
      order: date_DESC
    ) {
      total
      items {
        ...StaffNotesArchiveViewCategory
      }
    }
  }

  ${staffNotesArchiveViewCategoryFragment}
`;

const pickCollection = <C>(response: GetAllCategoriesQuery) => {
  if ('categoryCollection' in response) {
    return response.categoryCollection as C | undefined;
  }
  return null;
};

type GetAllCategories = Pick<GetStaticPropsContext, 'locale' | 'preview'>;
export const getAllCategories = async ({
  locale,
  preview,
}: GetAllCategories) => {
  const categories = await fetchAll<
    GetAllCategoriesQuery,
    NonNullable<GetAllCategoriesQuery['categoryCollection']>
  >({
    site: 'labo',
    query: getAllCategoriesQuery,
    locale,
    preview,
    pickCollection,
  });

  return {
    categories,
  };
};
