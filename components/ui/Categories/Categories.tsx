import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import s from './Categories.module.css';
import { useIntlMessage } from '@lib/hooks/useIntlMessage';
import { Link } from '@components/ui';
import type { VFC } from 'react';

type Props = {
  className?: string;
  label: string;
  items?: {
    sys: {
      id: string;
    };
    title?: string | null;
    slug?: string | null;
  }[];
  toAllLink?: string;
  basePath?: string;
  title?: string;
  titleTag?: 'h1' | 'h2' | 'p';
};

const useHasShown = () => {
  const [hasShown, setHasShown] = useState(false);
  const { asPath } = useRouter();
  useEffect(() => {
    setHasShown(false);
  }, [asPath]);
  return { hasShown, setHasShown };
};

const Categories: VFC<Props> = ({
  className,
  label,
  items,
  toAllLink,
  basePath,
  title,
  titleTag: TitleTag = 'h1',
}) => {
  const f = useIntlMessage();
  const { hasShown, setHasShown } = useHasShown();
  return (
    <div className={cn(className)}>
      {items && items.length > 1 && (
        <div
          className={cn(
            'flex',
            'justify-center',
            'relative',
            'border-b',
            'border-green'
          )}
        >
          <button
            className={cn(
              'text-base',
              'md:text-2xl',
              'leading-none',
              s.button,
              { [s.hasShown]: hasShown }
            )}
            aria-pressed={hasShown}
            aria-expanded={hasShown}
            aria-controls={'category-list'}
            onClick={() => setHasShown((value) => !value)}
          >
            {label}
          </button>
          <ul
            id="category-list"
            className={cn(
              'absolute',
              'z-10',
              'left-0',
              'bottom-0',
              'w-full',
              'bg-white',
              'text-base',
              'text-center',
              s.list,
              { ['hidden']: !hasShown }
            )}
            aria-hidden={!hasShown}
          >
            {toAllLink && (
              <li>
                <Link href={toAllLink} hasBorderEffect={true}>
                  {f('all')}
                </Link>
              </li>
            )}
            {items?.map((item) => {
              const { sys, title, slug } = item;
              if (!title || !slug) {
                return null;
              }
              return (
                <li key={sys.id}>
                  <Link href={`/${basePath}${slug}`} hasBorderEffect={true}>
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {title && (
        <TitleTag
          className={cn(
            'pt-7',
            'text-center',
            'text-base',
            'md:text-2xl',
            s.title
          )}
        >
          #{title}
        </TitleTag>
      )}
    </div>
  );
};

export default Categories;
