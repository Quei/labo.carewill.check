import { useState, useCallback } from 'react';
import cn from 'classnames';
import s from './SiteHeader.module.css';
import { SiteHeaderNavigation } from '@components/common';
import { Logo, Link } from '@components/ui';
import { SiteHeaderRoot } from './SiteHeaderRoot';
import type { VFC } from 'react';
import type { AllNavigations } from 'types/all-navigations';

type Props = {
  className?: string;
  isSiteRoot?: boolean;
  allNavigations?: AllNavigations;
};

const useMenu = () => {
  const [hasShownMenu, setHasShowMenu] = useState(false);
  const toggleMenu = useCallback(() => {
    setHasShowMenu((value) => !value);
  }, []);
  return { hasShownMenu, toggleMenu };
};

const SiteHeader: VFC<Props> = ({ isSiteRoot, allNavigations }) => {
  const SmallLogo = isSiteRoot ? 'p' : 'h1';
  const { hasShownMenu, toggleMenu } = useMenu();
  return (
    <SiteHeaderRoot>
      <div className={cn(s.innerRoot)}>
        <div className={cn(s.stickySentinel)} />
        <SmallLogo className={cn(s.smallLogo, s.hasShownSmallLogo)}>
          <Link href="/" site="store">
            <Logo />
          </Link>
        </SmallLogo>
        {allNavigations && (
          <SiteHeaderNavigation allNavigations={allNavigations} />
        )}
        {/* {shownSmallLogo && <div>search</div>} */}
      </div>

      {/* <div className="flex justify-end flex-1 space-x-8"> */}
      {/* <I18nWidget /> */}
      {/* <UserNav /> */}
      {/* </div> */}
    </SiteHeaderRoot>
  );
};

export default SiteHeader;
