import cn from 'classnames';
import s from './Container.module.css';
import type { FC, ReactNode } from 'react';

interface Props {
  className?: string;
  children?: ReactNode;
}

const Container: FC<Props> = ({ children, className }) => {
  return <div className={cn(s.root, className)}>{children}</div>;
};

export default Container;
