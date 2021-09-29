import { fetcher } from '@lib/contentful';
import { interviewsSingleViewSiblingsPostsFragment } from '@components/interviews';
import type { GetStaticPropsContext } from 'next';
import type { GetSiblingsInterviewsQuery } from 'types/schema';

const getSiblingsInterviewsQuery = /* GraphQL */ `
  query GetSiblingsInterviews(
    $locale: String!
    $preview: Boolean = false
    $date: DateTime!
    $slug: String!
    $seriesSlug: String!
  ) {
    previous: interviewCollection(
      locale: $locale
      preview: $preview
      limit: 1
      order: date_DESC
      where: { date_lte: $date, slug_not: $slug, series: { slug: $seriesSlug } }
    ) {
      items {
        ...InterviewsSingleViewSiblingsPosts
      }
    }
    next: interviewCollection(
      locale: $locale
      preview: $preview
      limit: 1
      order: date_ASC
      where: { date_gte: $date, slug_not: $slug, series: { slug: $seriesSlug } }
    ) {
      items {
        ...InterviewsSingleViewSiblingsPosts
      }
    }
  }

  ${interviewsSingleViewSiblingsPostsFragment}
`;

type GetSiblingsInterviews = Pick<
  GetStaticPropsContext,
  'locale' | 'preview'
> & {
  date?: string;
  slug?: string;
  seriesSlug?: string | null;
};
export const getSiblingsInterviews = async ({
  locale,
  preview,
  date = '',
  slug = '',
  seriesSlug = '',
}: GetSiblingsInterviews) => {
  const response = await fetcher<GetSiblingsInterviewsQuery>({
    query: getSiblingsInterviewsQuery,
    variables: {
      locale,
      preview,
      date,
      slug,
      seriesSlug,
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
