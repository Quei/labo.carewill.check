import {
  fetcher,
  getAllNavigations,
  getSiblingsStaffNotes,
} from '@lib/contentful';
import { Layout } from '@components/common';
import {
  StaffNotesSingleView,
  staffNotesSingleViewPostFragment,
} from '@components/staff-notes';
import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import type {
  GetStaffNotesSingleQuery,
  GetStaffNotesSinglePathsQuery,
} from 'types/schema';

const getStaffNotesSingle = /* GraphQL */ `
  query GetStaffNotesSingle(
    $locale: String!
    $slug: String!
    $preview: Boolean = false
  ) {
    staffNoteCollection(
      locale: $locale
      where: { slug: $slug }
      preview: $preview
      limit: 1
    ) {
      items {
        date
        ...staffNotesSingleViewPost
      }
    }
  }

  ${staffNotesSingleViewPostFragment}
`;

const getStaffNotesSinglePaths = /* GraphQL */ `
  query GetStaffNotesSinglePaths {
    staffNoteCollection {
      items {
        slug
      }
    }
  }
`;

export async function getStaticProps({
  preview,
  params,
  locale,
  locales,
}: GetStaticPropsContext<{ slug: string }>) {
  const slug = params?.slug;
  const promise = fetcher<GetStaffNotesSingleQuery>({
    query: getStaffNotesSingle,
    variables: {
      locale,
      slug,
      preview,
    },
    site: 'labo',
  });
  const allNavigationsPromise = getAllNavigations({ locale, preview });
  const [data, allNavigations] = await Promise.all([
    promise,
    allNavigationsPromise,
  ]);

  const post = data?.staffNoteCollection?.items?.[0];

  const siblingsPosts = await getSiblingsStaffNotes({
    locale,
    preview,
    date: post?.date,
  });

  if (!post) {
    // We throw to make sure this fails at build time as this is never expected to happen
    // throw new Error(`Recruiting post with slug '${slug}' not found`);
    return {
      notFound: true,
    };
  }

  return {
    props: { post, siblingsPosts, allNavigations },
    revalidate: 60 * 60, // Every hour
  };
}

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const postsPromise = fetcher<GetStaffNotesSinglePathsQuery>({
    query: getStaffNotesSinglePaths,
    site: 'labo',
  });
  const [postsData] = await Promise.all([postsPromise]);
  const paths = postsData?.staffNoteCollection?.items?.flatMap((item) => {
    return locales?.map((locale) => {
      return {
        params: { slug: item?.slug },
        locale,
      };
    });
  });

  return {
    paths,
    // Fallback shouldn't be enabled here or otherwise this route
    // will catch every page, even 404s, and we don't want that
    fallback: false,
  };
}

export default function Post({
  post,
  siblingsPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <StaffNotesSingleView post={post} siblingsPosts={siblingsPosts} />
    </>
  );
}

Post.Layout = Layout;
