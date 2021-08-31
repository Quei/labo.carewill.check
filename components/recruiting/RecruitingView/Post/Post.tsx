import { useMemo } from 'react';
import cn from 'classnames';
import s from './Post.module.css';
import { nonNullableFilter } from '@lib/non-nullable-filter';
import { useIntlMessage } from '@lib/hooks/useIntlMessage';
import {
  renderRichTextReact,
  richTextAssetFragment,
  richTextEntryHyperlinkFragment,
} from '@lib/contentful/utils/rich-text';
import { Block, Container, Categories, Link } from '@components/ui';
import type { VFC } from 'react';
import type {
  RecruitingViewPostFragment,
  RecruitingViewCategoriesFragment,
  Maybe,
} from 'types/schema';

type Props = RecruitingViewPostFragment & {
  className?: string;
  allPosts?: Maybe<RecruitingViewCategoriesFragment>[];
};

export const recruitingViewPostFragment = /* GraphQL */ `
  fragment recruitingViewPost on Recruiting {
    slug
    title
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
    formLabel
    formUrl
    notes {
      json
      links {
        assets {
          block {
            ...richTextAsset
          }
        }
      }
    }
  }

  ${richTextAssetFragment}
  ${richTextEntryHyperlinkFragment}
`;

export const recruitingViewCategoriesFragment = /* GraphQL */ `
  fragment recruitingViewCategories on Recruiting {
    sys {
      id
    }
    title
    slug
  }
`;

const Post: VFC<Props> = ({
  className,
  slug,
  title,
  content,
  formLabel,
  formUrl,
  notes,
  allPosts,
}) => {
  const f = useIntlMessage();
  const nonNullableAllPosts = useMemo(() => {
    return allPosts?.filter(nonNullableFilter);
  }, [allPosts]);
  return (
    <div className={cn(s.root, className)}>
      <Block>
        <Container>
          <Categories
            label={f('labo.selectCategory')}
            items={nonNullableAllPosts}
            basePath="recruiting/"
            title={title ?? undefined}
            titleTag="h1"
          />
          <div className={cn(s.content, slug ? s[slug] : undefined)}>
            {renderRichTextReact(content)}
          </div>
          {formUrl && formLabel && (
            <div className={cn(s.formLink)}>
              <Link href={formUrl} target="_blank">
                {formLabel}
              </Link>
            </div>
          )}
          {notes && (
            <div className={cn(s.notes)}>{renderRichTextReact(notes)}</div>
          )}
        </Container>
      </Block>
    </div>
  );
};

export default Post;
