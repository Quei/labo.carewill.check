import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import s from './Layout.module.css';
import { IntlProvider } from 'react-intl';
import { SiteHeader, SiteFooter } from '@components/common';
import { ja as localeContentJa, en as localeContentEn } from '@content/locales';
import type { FC } from 'react';
import type { AllNavigations } from 'types/all-navigations';
import type { FooterItemFragment } from 'types/schema';

interface Props {
  pageProps: {
    allNavigations: AllNavigations;
    footer?: FooterItemFragment;
    isSiteRoot?: boolean;
  };
}

const Layout: FC<Props> = ({
  children,
  pageProps: { allNavigations, footer, isSiteRoot, ...pageProps },
}) => {
  const { locale = 'ja', defaultLocale } = useRouter();
  const messages = useMemo(() => {
    return locale === 'ja' ? localeContentJa : localeContentEn;
  }, [locale]);

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <div className={cn(s.root)}>
        <SiteHeader
          className={cn(s.header)}
          isSiteRoot={isSiteRoot ?? false}
          allNavigations={allNavigations}
        />
        <main className={cn(s.main, 'fit')}>{children}</main>
        <SiteFooter
          className={cn(s.footer)}
          allNavigations={allNavigations}
          {...footer}
        />
      </div>
    </IntlProvider>
  );
};

export default Layout;
