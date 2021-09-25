import Image from 'next/image';
import dayjs from 'dayjs';
import cn from 'classnames';
import s from './StaffNotesSingleView.module.css';
import {
  renderRichText,
  renderRichTextReact,
  richTextAssetFragment,
  richTextEntryHyperlinkFragment,
} from '@lib/contentful/utils/rich-text';
import { useIntlMessage } from '@lib/hooks/useIntlMessage';
import { Seo } from '@components/common';
import {
  Block,
  BlockContentChildPage,
  ShareButtons,
  Link,
  Pagination,
} from '@components/ui';
import type { VFC } from 'react';
import type {
  StaffNotesSingleViewPostFragment,
  StaffNotesSingleViewSiblingsPostsFragment,
} from 'types/schema';

type Props = {
  post: StaffNotesSingleViewPostFragment;
  siblingsPosts: {
    previous: StaffNotesSingleViewSiblingsPostsFragment | null;
    next: StaffNotesSingleViewSiblingsPostsFragment | null;
  };
};

export const staffNotesSingleViewPostFragment = /* GraphQL */ `
  fragment StaffNotesSingleViewPost on StaffNote {
    date
    title
    image {
      url
      description
      width
      height
    }
    content {
      json
      links {
        assets {
          block {
            ...RichTextAsset
          }
        }
        entries {
          hyperlink {
            ...RichTextEntryHyperlink
          }
        }
      }
    }
    categoryCollection {
      items {
        sys {
          id
        }
        slug
        title
      }
    }
  }
  ${richTextAssetFragment}
  ${richTextEntryHyperlinkFragment}
`;

export const staffNotesSingleViewSiblingsPostsFragment = /* GraphQL */ `
  fragment StaffNotesSingleViewSiblingsPosts on StaffNote {
    slug
    title
  }
`;

const StaffNotesSingleView: VFC<Props> = ({ post, siblingsPosts }) => {
  const { date, title, image, content, categoryCollection } = post;
  const f = useIntlMessage();
  const description = renderRichText(content, 300);
  return (
    <>
      <Seo title={title ?? undefined} description={description} image={image} />
      <Block title={f('labo.staffNotes')} titleTag={'p'}>
        <BlockContentChildPage>
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
          {categoryCollection?.items?.length !== 0 && (
            <ul
              className={cn('text-sm', 'flex', 'flex-wrap', 'gap-x-4', 'mt-14')}
            >
              {categoryCollection?.items.map((item) => {
                if (!item?.slug || !item?.title) {
                  return null;
                }
                return (
                  <li key={item.sys.id}>
                    <Link href={`/staff-notes/category/${item.slug}`}>
                      #{item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
          {siblingsPosts && (
            <Pagination
              indexLink="/staff-notes"
              basePath="staff-notes/"
              siblingsPosts={siblingsPosts}
            />
          )}
        </BlockContentChildPage>
      </Block>
    </>
  );
};

export default StaffNotesSingleView;
