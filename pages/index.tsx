import { fetcher, getAllNavigations, getFooter } from '@lib/contentful';
import { Layout } from '@components/common';
import {
  HomeView,
  homeLaboViewFragment,
  homeLaboLatestStaffNoteFragment,
} from '@components/home';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import type { GetHomeLaboQuery } from 'types/schema';

const getHomeLaboQuery = /* GraphQL */ `
  query GetHomeLabo(
    $locale: String!
    $slug: String!
    $preview: Boolean = false
  ) {
    homeCollection(
      locale: $locale
      where: { slug: $slug }
      preview: $preview
      limit: 1
    ) {
      items {
        ...homeLaboView
      }
    }
    staffNoteCollection(
      locale: $locale
      preview: $preview
      order: date_DESC
      limit: 1
    ) {
      items {
        ...homeLaboLatestStaffNote
      }
    }
  }

  ${homeLaboViewFragment}
  ${homeLaboLatestStaffNoteFragment}
`;

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const SLUG = 'home';
  const laboPromise = fetcher<GetHomeLaboQuery>({
    query: getHomeLaboQuery,
    variables: {
      locale,
      slug: SLUG,
      preview,
    },
    site: 'labo',
  });
  const allNavigationsPromise = getAllNavigations({ locale, preview });
  const footerPromise = getFooter({ locale, preview });
  const [laboData, allNavigations, footerData] = await Promise.all([
    laboPromise,
    allNavigationsPromise,
    footerPromise,
  ]);
  const labo = laboData?.homeCollection?.items?.[0];
  const latestStaffNote = laboData?.staffNoteCollection?.items?.[0];

  return {
    props: {
      labo: { ...labo, latestStaffNote },
      allNavigations,
      footer: footerData.footer,
      isSiteRoot: true,
    },
    // revalidate: 14400,
    revalidate: 60 * 30,
  };
}

export default function Home({
  labo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HomeView labo={labo ?? undefined} />
      {/* <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      /> */}
    </>
  );
}

Home.Layout = Layout;
