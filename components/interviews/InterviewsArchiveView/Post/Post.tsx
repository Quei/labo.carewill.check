import Image from 'next/image';
import cn from 'classnames';
import s from './Post.module.css';
import { renderRichText } from '@lib/contentful/utils/rich-text';
import { Block, BlockContent } from '@components/ui';
import type { VFC } from 'react';
import type { InterviewsArchiveViewPostFragment } from 'types/schema';

type Props = InterviewsArchiveViewPostFragment & {
  className?: string;
};

export const interviewsArchiveViewPostFragment = /* GraphQL */ `
  fragment InterviewsArchiveViewPost on InterviewSeries {
    slug
    title
    description
    image {
      url
      description
    }
  }
`;

const Post: VFC<Props> = ({ className, slug, title, description, image }) => {
  return (
    <Block
      className={cn('relative', className)}
      href={`/interviews/series/${slug}`}
      title={title ?? ''}
      titleTag="h2"
    >
      <BlockContent
        image={{ src: image?.url, alt: image?.description ?? title ?? '' }}
      >
        {description && description}
      </BlockContent>
    </Block>
  );
};

export default Post;
