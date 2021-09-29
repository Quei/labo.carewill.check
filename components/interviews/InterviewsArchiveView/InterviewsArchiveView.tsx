import { useCallback, useMemo } from 'react';
import cn from 'classnames';
import s from './InterviewsArchiveView.module.css';
import { useIntlMessage } from '@lib/hooks/useIntlMessage';
import { renderRichText } from '@lib/contentful/utils/rich-text';
import { Seo } from '@components/common';
import { PageHeader, Grid, useUI, MorePostsButton } from '@components/ui';
import { Post, interviewsArchiveViewPostFragment } from './Post';
import type { VFC } from 'react';
import type {
  InterviewsArchiveViewDescriptionFragment,
  InterviewsArchiveViewPostWithIdFragment,
  Maybe,
} from 'types/schema';

type Props = {
  home?: Maybe<InterviewsArchiveViewDescriptionFragment>;
  posts?: Maybe<InterviewsArchiveViewPostWithIdFragment>[];
};

export const interviewsArchiveViewDescriptionFragment = /* GraphQL */ `
  fragment InterviewsArchiveViewDescription on Home {
    interviewDescription {
      json
    }
  }
`;

export const interviewsArchiveViewPostWithIdFragment = /* GraphQL */ `
  fragment InterviewsArchiveViewPostWithId on InterviewSeries {
    sys {
      id
    }
    ...InterviewsArchiveViewPost
  }
  ${interviewsArchiveViewPostFragment}
`;

const DEFAULT_SHOWN_POSTS_NUMBER = 6;
const ADD_SHOWN_POSTS_NUMBER = 12;

const useCurrentPosts = ({ posts }: Pick<Props, 'posts'>) => {
  const { interviewsArchiveShownPostsNumber } = useUI();
  const shownPostsNumber =
    interviewsArchiveShownPostsNumber?.interviews ?? DEFAULT_SHOWN_POSTS_NUMBER;

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
  const {
    interviewsArchiveShownPostsNumber,
    setInterviewsArchiveShownPostsNumber,
  } = useUI();
  const shownPostsNumber =
    interviewsArchiveShownPostsNumber?.interviews ?? DEFAULT_SHOWN_POSTS_NUMBER;

  const nextShownPostsNumber = shownPostsNumber + ADD_SHOWN_POSTS_NUMBER;
  const number = Math.min(nextShownPostsNumber, total);

  return useCallback(() => {
    if (setInterviewsArchiveShownPostsNumber) {
      setInterviewsArchiveShownPostsNumber('interviews', number);
    }
  }, [setInterviewsArchiveShownPostsNumber, number]);
};

const InterviewsArchiveView: VFC<Props> = ({ home, posts }) => {
  const f = useIntlMessage();
  const { currentPosts, hasMorePosts } = useCurrentPosts({ posts });
  const handleOnClickMorePosts = useHandleOnClickMorePosts(posts?.length);
  const title = f('labo.interviews');
  const descriptionText = renderRichText(home?.interviewDescription);
  return (
    <>
      <Seo title={title} description={descriptionText} />
      <PageHeader title={title}>{descriptionText}</PageHeader>
      {currentPosts.length && (
        <Grid>
          {currentPosts.map((post) => (
            <Post key={post?.sys.id} {...post} />
          ))}
        </Grid>
      )}
      {hasMorePosts && <MorePostsButton onClick={handleOnClickMorePosts} />}
    </>
  );
};

export default InterviewsArchiveView;
