import cn from 'classnames';
import s from './Pagination.module.css';
import { useIntlMessage } from '@lib/hooks/useIntlMessage';
import { Link } from '@components/ui';
import type { VFC } from 'react';
import { Maybe } from 'types/schema';

type PostItem = {
  slug?: Maybe<string>;
  title?: Maybe<string>;
};
type Props = {
  className?: string;
  indexLink?: string;
  basePath?: string;
  siblingsPosts: {
    previous: Maybe<PostItem>;
    next: Maybe<PostItem>;
  };
};

const Pagination: VFC<Props> = ({
  className,
  indexLink,
  basePath = '',
  siblingsPosts,
}) => {
  const f = useIntlMessage();
  return (
    <ul className={cn('flex', 'justify-between', 'mt-20', s.root, className)}>
      <li className={cn('text-left', s.next)}>
        {siblingsPosts?.next?.slug && (
          <Link href={`/${basePath}${siblingsPosts.next.slug}`}>
            {siblingsPosts.next?.title}
          </Link>
        )}
      </li>
      <li className={cn('text-center')}>
        {indexLink && <Link href={indexLink}>{f('index')}</Link>}
      </li>
      <li className={cn('text-right', s.previous)}>
        {siblingsPosts?.previous?.slug && (
          <Link href={`/${basePath}${siblingsPosts.previous.slug}`}>
            {siblingsPosts.previous?.title}
          </Link>
        )}
      </li>
    </ul>
  );
};

export default Pagination;
