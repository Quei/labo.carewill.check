import Image from 'next/image';
import dayjs from 'dayjs';
import cn from 'classnames';
import s from './SingleView.module.css';
import { renderRichTextReact } from '@lib/contentful/utils/rich-text';
import {
  Block,
  BlockContentChildPage,
  ShareButtons,
  Link,
} from '@components/ui';
import type { VFC, ReactNode } from 'react';
import type {
  InterviewsSingleViewPostFragment,
  StaffNotesSingleViewPostFragment,
} from 'types/schema';

type Props = (
  | InterviewsSingleViewPostFragment
  | StaffNotesSingleViewPostFragment
) & {
  className?: string;
  blockTitle?: string;
  categoryCollectionBasePath?: string;
  pagination?: ReactNode;
};

const SingleView: VFC<Props> = ({
  className,
  blockTitle,
  categoryCollectionBasePath,
  pagination,
  title,
  date,
  image,
  content,
  categoryCollection,
}) => {
  return (
    <Block title={blockTitle} titleTag="p">
      <BlockContentChildPage className={cn(className)}>
        <div
          className={cn(
            'relative',
            'text-base',
            'leading-normal',
            'md:text-2xl',
            'md:leading-normal'
          )}
        >
          <ShareButtons
            className={cn('absolute', 'top-0', 'right-0')}
            title={title}
          />
          {date && (
            <p>
              <time>{dayjs(date).format('YYYY.MM.DD')}</time>
            </p>
          )}
          {title && <h1 className={cn(s.title)}>{title}</h1>}
        </div>
        {image?.url && image?.width && image?.height && (
          <div className={cn('relative', s.image)}>
            <Image
              src={image.url}
              alt={image?.description ?? title ?? ''}
              width={image.width}
              height={image.height}
              layout="responsive"
            />
          </div>
        )}
        {content && (
          <div className={cn('text-sm', s.content)}>
            {renderRichTextReact(content)}
          </div>
        )}
        {categoryCollectionBasePath && categoryCollection?.items?.length !== 0 && (
          <ul
            className={cn('text-sm', 'flex', 'flex-wrap', 'gap-x-4', 'mt-14')}
          >
            {categoryCollection?.items.map((item) => {
              if (!item?.slug || !item?.title) {
                return null;
              }
              return (
                <li key={item.sys.id}>
                  <Link href={`${categoryCollectionBasePath}${item.slug}`}>
                    #{item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        {pagination && pagination}
      </BlockContentChildPage>
    </Block>
  );
};

export default SingleView;
