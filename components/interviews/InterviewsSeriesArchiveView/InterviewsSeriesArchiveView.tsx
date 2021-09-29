import cn from 'classnames';
import s from './InterviewsSeriesArchiveView.module.css';
import { nonNullableFilter } from '@lib/non-nullable-filter';
import { useIntlMessage } from '@lib/hooks/useIntlMessage';
import { Seo } from '@components/common';
import { FullImage, OnelineLink } from '@components/ui';
import { Post, interviewsSeriesArchiveViewPostFragment } from './Post';
import type { VFC } from 'react';
import type {
  InterviewsSeriesArchiveViewPageFragment,
  InterviewsSeriesArchiveViewPostWithIdFragment,
  Maybe,
} from 'types/schema';

type Props = {
  series?: Maybe<InterviewsSeriesArchiveViewPageFragment>;
  posts?: Maybe<InterviewsSeriesArchiveViewPostWithIdFragment>[];
};

export const interviewsSeriesArchiveViewPageFragment = /* GraphQL */ `
  fragment InterviewsSeriesArchiveViewPage on InterviewSeries {
    title
    description
    image {
      url
      description
      width
      height
    }
  }
`;

export const interviewsSeriesArchiveViewPostWithIdFragment = /* GraphQL */ `
  fragment InterviewsSeriesArchiveViewPostWithId on Interview {
    sys {
      id
    }
    ...InterviewsSeriesArchiveViewPost
  }
  ${interviewsSeriesArchiveViewPostFragment}
`;

const InterviewsArchiveView: VFC<Props> = ({ series, posts }) => {
  const f = useIntlMessage();
  const seoTitle = [series?.title, f('labo.interviews')]
    .filter(nonNullableFilter)
    .join(' - ');
  const title = series?.title ?? '';
  const descriptionText = series?.description ?? '';
  const image = series?.image;
  return (
    <>
      <Seo title={seoTitle} description={descriptionText} image={image} />
      {image?.url && (
        <FullImage src={image.url} alt={image?.description ?? ''} />
      )}
      {posts?.length && (
        <div className={cn(s.posts)}>
          {posts.map((post, index) => (
            <Post
              key={post?.sys.id}
              pageTitle={index === 0 ? title : undefined}
              {...post}
            />
          ))}
        </div>
      )}
      <OnelineLink href="/interviews" isSmall={true}>
        {f('labo.interviews.backToIndex')}
      </OnelineLink>
    </>
  );
};

export default InterviewsArchiveView;
