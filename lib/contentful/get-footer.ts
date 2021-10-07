import { fetcher } from '@lib/contentful';
import { footerFragment } from '@components/common/SiteFooter';
import type { GetStaticPropsContext } from 'next';
import type { GetFooterQuery } from 'types/schema';

const getFooterQuery = /* GraphQL */ `
  query GetFooter($locale: String!, $slug: String!, $preview: Boolean = false) {
    footerCollection(
      locale: $locale
      where: { slug: $slug }
      preview: $preview
      limit: 1
    ) {
      items {
        ...FooterItem
      }
    }
  }
  ${footerFragment}
`;

export const getFooter = async ({
  locale,
  preview,
}: Pick<GetStaticPropsContext, 'locale' | 'preview'>) => {
  const SLUG = 'footer';
  const footerPromise = fetcher<GetFooterQuery>({
    query: getFooterQuery,
    variables: {
      locale,
      slug: SLUG,
      preview,
    },
    site: 'store',
  });

  const [footerData] = await Promise.all([footerPromise]);
  const footer = footerData?.footerCollection?.items?.[0];

  return {
    footer,
  };
};
