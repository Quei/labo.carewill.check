import cn from 'classnames';
import s from './RecruitingView.module.css';
import { useIntlMessage } from '@lib/hooks/useIntlMessage';
import { renderRichText } from '@lib/contentful/utils/rich-text';
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
  return (
    <>
      <PageHeader title={f('labo.recruiting')} titleTag="p">
        {home?.recruitingDescription &&
          renderRichText(home.recruitingDescription)}
      </PageHeader>
      <Post {...post} allPosts={allPosts} />
    </>
  );
};

export default RecruitingView;
