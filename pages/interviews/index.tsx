import { fetcher, getAllNavigations, getFooter } from '@lib/contentful';
import { useIsInterviewsLogin } from '@lib/hooks/useIsInterviewsLogin';
import { Layout } from '@components/common';
import {
  InterviewsArchiveView,
  interviewsArchiveViewDescriptionFragment,
  interviewsArchiveViewPostWithIdFragment,
  LoginView,
} from '@components/interviews';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import type { GetInterviewsArchiveQuery } from 'types/schema';

const getInterviewsArchive = /* GraphQL */ `
  query GetInterviewsArchive($locale: String!, $preview: Boolean = false) {
    homeCollection(
      locale: $locale
      where: { slug: "home" }
      preview: $preview
      limit: 1
    ) {
      items {
        ...InterviewsArchiveViewDescription
      }
    }
    interviewSeriesCollection(
      locale: $locale
      preview: $preview
      order: date_DESC
      limit: 100
    ) {
      items {
        ...InterviewsArchiveViewPostWithId
      }
    }
  }

  ${interviewsArchiveViewDescriptionFragment}
  ${interviewsArchiveViewPostWithIdFragment}
`;

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const promise = fetcher<GetInterviewsArchiveQuery>({
    query: getInterviewsArchive,
    variables: {
      locale,
      preview,
    },
    site: 'labo',
  });

  const allNavigationsPromise = getAllNavigations({ locale, preview });
  const footerPromise = getFooter({ locale, preview });
  const [data, allNavigations, footerData] = await Promise.all([
    promise,
    allNavigationsPromise,
    footerPromise,
  ]);

  const home = data?.homeCollection?.items?.[0];
  const posts = data?.interviewSeriesCollection?.items;

  return {
    props: {
      home,
      posts,
      allNavigations,
      footer: footerData.footer,
    },
    revalidate: 60 * 60, // Every hour
  };
}

export default function Posts({
  home,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isLoading, isLogin, setIsLogin } = useIsInterviewsLogin();
  return (
    <>
      {!isLoading && !isLogin && <LoginView setIsLogin={setIsLogin} />}
      {!isLoading && isLogin && (
        <InterviewsArchiveView home={home} posts={posts} />
      )}
    </>
  );
}

Posts.Layout = Layout;
