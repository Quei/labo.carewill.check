import cn from 'classnames';
import s from './StaffNotesSingleView.module.css';
import {
  renderRichText,
  richTextAssetFragment,
  richTextEntryHyperlinkFragment,
} from '@lib/contentful/utils/rich-text';
import { useIntlMessage } from '@lib/hooks/useIntlMessage';
import { Seo, SingleView } from '@components/common';
import { Pagination } from '@components/ui';
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
  const { title, image, content } = post;
  const f = useIntlMessage();
  const description = renderRichText(content, 300);
  return (
    <>
      <Seo title={title ?? undefined} description={description} image={image} />
      <SingleView
        blockTitle={f('labo.staffNotes')}
        categoryCollectionBasePath="/staff-notes/category/"
        pagination={
          siblingsPosts && (
            <Pagination
              indexLink="/staff-notes"
              basePath="staff-notes/"
              siblingsPosts={siblingsPosts}
            />
          )
        }
        {...post}
      />
    </>
  );
};

export default StaffNotesSingleView;
