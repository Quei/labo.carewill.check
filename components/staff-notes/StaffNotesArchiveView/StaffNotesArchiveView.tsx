import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import s from './StaffNotesArchiveView.module.css';
import { nonNullableFilter } from '@lib/non-nullable-filter';
import { useIntlMessage } from '@lib/hooks/useIntlMessage';
import { renderRichText } from '@lib/contentful/utils/rich-text';
import {
  PageHeader,
  Block,
  Container,
  Categories,
  useUI,
  MorePostsButton,
} from '@components/ui';
import { Post, staffNotesArchiveViewPostFragment } from './Post';
import type { VFC } from 'react';
import type {
  StaffNotesArchiveViewDescriptionFragment,
  StaffNotesArchiveViewPostWithIdFragment,
  StaffNotesArchiveViewCategoryFragment,
  Maybe,
} from 'types/schema';

type Props = {
  home?: Maybe<StaffNotesArchiveViewDescriptionFragment>;
  category?: Maybe<string>;
  posts?: Maybe<StaffNotesArchiveViewPostWithIdFragment>[];
  categories?: Maybe<StaffNotesArchiveViewCategoryFragment>[];
};

export const staffNotesArchiveViewDescriptionFragment = /* GraphQL */ `
  fragment staffNotesArchiveViewDescription on Home {
    staffNoteDescription {
      json
    }
  }
`;

export const staffNotesArchiveViewPostWithIdFragment = /* GraphQL */ `
  fragment staffNotesArchiveViewPostWithId on StaffNote {
    sys {
      id
    }
    ...staffNotesArchiveViewPost
  }
  ${staffNotesArchiveViewPostFragment}
`;

export const staffNotesArchiveViewCategoryFragment = /* GraphQL */ `
  fragment staffNotesArchiveViewCategory on Category {
    sys {
      id
    }
    title
    slug
  }
`;

const DEFAULT_SHOWN_POSTS_NUMBER = 4;
const ADD_SHOWN_POSTS_NUMBER = 12;

const useCurrentPosts = ({ posts }: Pick<Props, 'posts'>) => {
  const { query } = useRouter();
  const categorySlug = (query.slug as string) ?? 'staff-notes';
  const { staffNotesArchiveShownPostsNumber } = useUI();
  const shownPostsNumber =
    staffNotesArchiveShownPostsNumber?.[categorySlug] ??
    DEFAULT_SHOWN_POSTS_NUMBER;

  if (!posts) {
    return {
      currentPosts: [],
      hasMorePosts: false,
    };
  }
  return {
    currentPosts: posts?.slice(0, shownPostsNumber),
    hasMorePosts: shownPostsNumber < posts.length,
  };
};

const useHandleOnClickMorePosts = (total: number = 0) => {
  const { query } = useRouter();
  const categorySlug = (query.slug as string) ?? 'staff-notes';
  const {
    staffNotesArchiveShownPostsNumber,
    setStaffNotesArchiveShownPostsNumber,
  } = useUI();
  const shownPostsNumber =
    staffNotesArchiveShownPostsNumber?.[categorySlug] ??
    DEFAULT_SHOWN_POSTS_NUMBER;

  const nextShownPostsNumber = shownPostsNumber + ADD_SHOWN_POSTS_NUMBER;
  const number = Math.min(nextShownPostsNumber, total);

  return useCallback(() => {
    if (setStaffNotesArchiveShownPostsNumber) {
      setStaffNotesArchiveShownPostsNumber(categorySlug, number);
    }
  }, [setStaffNotesArchiveShownPostsNumber, categorySlug, number]);
};

const StaffNotesArchiveView: VFC<Props> = ({
  home,
  category,
  posts,
  categories,
}) => {
  const f = useIntlMessage();
  const nonNullableCategories = useMemo(() => {
    return categories?.filter(nonNullableFilter);
  }, [categories]);
  const { currentPosts, hasMorePosts } = useCurrentPosts({ posts });
  const handleOnClickMorePosts = useHandleOnClickMorePosts(posts?.length);

  return (
    <>
      <PageHeader title={f('labo.staffNotes')} titleTag={category ? 'p' : 'h1'}>
        {home?.staffNoteDescription &&
          renderRichText(home.staffNoteDescription)}
      </PageHeader>
      <Block>
        <Container>
          <Categories
            label={f('labo.selectCategory')}
            items={nonNullableCategories}
            toAllLink={'/staff-notes'}
            basePath="staff-notes/category/"
            title={category ?? undefined}
            titleTag={category ? 'h1' : undefined}
          />
          {currentPosts && (
            <div className={cn(s.posts)}>
              {currentPosts.map((post) => (
                <Post key={post?.sys.id} {...post} />
              ))}
            </div>
          )}
        </Container>
      </Block>
      {hasMorePosts && <MorePostsButton onClick={handleOnClickMorePosts} />}
    </>
  );
};

export default StaffNotesArchiveView;
