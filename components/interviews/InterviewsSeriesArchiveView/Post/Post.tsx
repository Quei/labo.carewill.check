import Image from 'next/image';
import dayjs from 'dayjs';
import cn from 'classnames';
import s from './Post.module.css';
import { renderRichText } from '@lib/contentful/utils/rich-text';
import { Block, DefaultImage } from '@components/ui';
import type { VFC } from 'react';
import type { InterviewsSeriesArchiveViewPostFragment } from 'types/schema';

type Props = InterviewsSeriesArchiveViewPostFragment & {
  className?: string;
  pageTitle?: string;
};

export const interviewsSeriesArchiveViewPostFragment = /* GraphQL */ `
  fragment InterviewsSeriesArchiveViewPost on Interview {
    slug
    title
    date
    content {
      json
    }
    image {
      url
      description
    }
  }
`;

const Post: VFC<Props> = ({
  className,
  pageTitle,
  slug,
  title,
  date,
  content,
  image,
}) => {
  return (
    <Block
      className={cn('relative', className)}
      href={`/interviews/${slug}`}
      title={pageTitle ?? ''}
      titleTag="h1"
    >
      <article className={cn('py-18', 'lg:flex', s.article)}>
        <div>
          <header
            className={cn(
              'text-base',
              'leading-relaxed',
              'md:text-2xl',
              'md:leading-relaxed'
            )}
          >
            <p>
              <time dateTime={date}>{dayjs(date).format('YYYY.MM.DD')}</time>
            </p>
            <h2 className={cn('lg:line-clamp-1')}>{title}</h2>
          </header>
          {content && (
            <div
              className={cn(
                'text-sm',
                'line-clamp-5',
                'mt-3',
                'lg:line-clamp-4',
                'lg:mt-5'
              )}
            >
              {renderRichText(content, 200)}
            </div>
          )}
        </div>
        <div
          className={cn(
            'relative',
            'mt-5',
            'less-than-lg:aspect-w-1',
            'less-than-lg:aspect-h-1',
            'lg:flex-shrink-0',
            'lg:flex-grow-0',
            'lg:ml-5',
            'lg:mt-5',
            s.imageWrapper
          )}
        >
          {image?.url && (
            <Image
              src={image.url}
              layout="fill"
              objectFit="cover"
              alt={image.description ?? title ?? ''}
            />
          )}
          {!image && <DefaultImage strokeWidth={1} />}
        </div>
      </article>
    </Block>
  );
};

export default Post;
