import cn from 'classnames';
import s from './RecruitingView.module.css';
import { useIntlMessage } from '@lib/hooks/useIntlMessage';
import { renderRichText } from '@lib/contentful/utils/rich-text';
import { Seo } from '@components/common';
import { PageHeader } from '@components/ui';
import { Post } from './Post';
import type { VFC } from 'react';
import type {
  RecruitingViewDescriptionFragment,
  RecruitingViewPostFragment,
  RecruitingViewCategoriesFragment,
} from 'types/schema';

type Props = {
  home: RecruitingViewDescriptionFragment;
  post: RecruitingViewPostFragment;
  allPosts: RecruitingViewCategoriesFragment[];
};

export const recruitingViewDescriptionFragment = /* GraphQL */ `
  fragment recruitingViewDescription on Home {
    recruitingDescription {
      json
    }
  }
`;

const RecruitingView: VFC<Props> = ({ home, post, allPosts }) => {
  const f = useIntlMessage();
  const title = `${post.title} - ${f('labo.recruiting')}`;
  const descriptionText = renderRichText(home.recruitingDescription);
  return (
    <>
      <Seo title={title} description={descriptionText} />
      <PageHeader title={f('labo.recruiting')} titleTag="p">
        {descriptionText}
      </PageHeader>
      <Post {...post} allPosts={allPosts} />
    </>
  );
};

export default RecruitingView;
