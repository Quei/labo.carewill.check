import cn from 'classnames';
import s from './InterviewsSingleView.module.css';
import {
  renderRichText,
  richTextAssetFragment,
} from '@lib/contentful/utils/rich-text';
import { richTextEntryHyperlinkFragment } from '@lib/contentful/utils/labo/rich-text-fragment';
import { nonNullableFilter } from '@lib/non-nullable-filter';
import { useIntlMessage } from '@lib/hooks/useIntlMessage';
import { Seo, SingleView } from '@components/common';
import { Pagination } from '@components/ui';
import type { VFC } from 'react';
import type {
  InterviewsSingleViewPostFragment,
  InterviewsSingleViewSiblingsPostsFragment,
} from 'types/schema';

type Props = {
  post: InterviewsSingleViewPostFragment;
  siblingsPosts: {
    previous: InterviewsSingleViewSiblingsPostsFragment | null;
    next: InterviewsSingleViewSiblingsPostsFragment | null;
  };
};

export const interviewsSingleViewPostFragment = /* GraphQL */ `
  fragment InterviewsSingleViewPost on Interview {
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
    series {
      title
      slug
    }
  }
  ${richTextAssetFragment}
  ${richTextEntryHyperlinkFragment}
`;

export const interviewsSingleViewSiblingsPostsFragment = /* GraphQL */ `
  fragment InterviewsSingleViewSiblingsPosts on Interview {
    slug
    title
  }
`;

const InterviewsSingleView: VFC<Props> = ({ post, siblingsPosts }) => {
  const { title, image, content, series } = post;
  const f = useIntlMessage();
  const description = renderRichText(content, 300);
  const seoTitle = [title, series?.title, f('labo.interviews')]
    .filter(nonNullableFilter)
    .join(' - ');
  return (
    <>
      <Seo title={seoTitle} description={description} image={image} />
      <SingleView
        blockTitle={series?.title ?? ''}
        pagination={
          siblingsPosts &&
          series?.slug && (
            <Pagination
              indexLink={`/interviews/series/${series.slug}`}
              basePath="interviews/"
              siblingsPosts={siblingsPosts}
            />
          )
        }
        {...post}
      />
    </>
  );
};

export default InterviewsSingleView;
