import Image from 'next/image';
import dayjs from 'dayjs';
import cn from 'classnames';
import s from './Post.module.css';
import { renderRichText } from '@lib/contentful/utils/rich-text';
import { DefaultImage, Link } from '@components/ui';
import type { VFC } from 'react';
import type { StaffNotesArchiveViewPostFragment } from 'types/schema';

type Props = StaffNotesArchiveViewPostFragment & {
  className?: string;
};

export const staffNotesArchiveViewPostFragment = /* GraphQL */ `
  fragment staffNotesArchiveViewPost on StaffNote {
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

const Post: VFC<Props> = ({ className, slug, title, date, content, image }) => {
  return (
    <article className={cn('relative', className)}>
      <Link className={cn(s.link)} href={`/staff-notes/${slug}`}>
        <p>
          <time dateTime={date}>{dayjs(date).format('YYYY.MM.DD')}</time>
        </p>
        {title && (
          <h2 className={cn('line-clamp-4', 'md:line-clamp-2')}>{title}</h2>
        )}
        <div className={cn(s.content)}>{renderRichText(content)}</div>
        <div className={cn(s.imageWrapper)}>
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
      </Link>
    </article>
  );
};

export default Post;
