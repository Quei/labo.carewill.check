import Image from 'next/image';
import dayjs from 'dayjs';
import cn from 'classnames';
import s from './StaffNotesSingleView.module.css';
import {
  renderRichTextReact,
  richTextAssetFragment,
  richTextEntryHyperlinkFragment,
} from '@lib/contentful/utils/rich-text';
import { useIntlMessage } from '@lib/hooks/useIntlMessage';
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
  fragment staffNotesSingleViewPost on StaffNote {
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
            ...richTextAsset
          }
        }
        entries {
          hyperlink {
            ...richTextEntryHyperlink
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
  fragment staffNotesSingleViewSiblingsPosts on StaffNote {
    slug
    title
  }
`;

const StaffNotesSingleView: VFC<Props> = ({ post, siblingsPosts }) => {
  const { date, title, image, content, categoryCollection } = post;
  const f = useIntlMessage();
  return (
    <Block title={f('labo.staffNotes')} titleTag={'p'}>
      <BlockContentChildPage>
        <div className={cn(s.header)}>
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
          <div className={cn(s.image)}>
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
          <div className={cn(s.content)}>{renderRichTextReact(content)}</div>
        )}
        {categoryCollection?.items?.length !== 0 && (
          <ul className={cn(s.categoryList)}>
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
  );
};

export default StaffNotesSingleView;
