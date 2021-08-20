import { Link } from '@components/ui';
import type { FC, ReactNode } from 'react';

type Props = {
  __typename: string;
  slug: string;
  children: ReactNode;
};
export const LinkResolver: FC<Props> = ({ __typename, slug, children }) => {
  if (__typename === 'StaffNote') {
    return <Link href={`/staff-notes/${slug}`}>{children}</Link>;
  } else if (__typename === 'Interview') {
    return <Link href={`/interviews/${slug}`}>{children}</Link>;
  } else if (__typename === 'Recruiting') {
    return <Link href={`/recruiting/${slug}`}>{children}</Link>;
  }
  return <Link href={`/${slug}`}>{children}</Link>;
};
