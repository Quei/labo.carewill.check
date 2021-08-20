import { useState, useEffect } from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import cn from 'classnames';
import s from './ShareButtons.module.css';
import { Twitter, Facebook } from '@components/icons';
import type { VFC } from 'react';

type Props = {
  className?: string;
  title?: string | null;
};

const useShareUrls = () => {
  const [url, setUrl] = useState('');
  useEffect(() => {
    if (location) {
      setUrl(location.href);
    }
  }, []);
  return url;
};

const ShareButtons: VFC<Props> = ({ className, title }) => {
  const url = useShareUrls();
  return (
    <ul className={cn(s.root, className)}>
      <li>
        <TwitterShareButton
          className={cn(s.button)}
          url={url}
          title={title ?? undefined}
        >
          <Twitter />
        </TwitterShareButton>
      </li>
      <li>
        <FacebookShareButton
          className={cn(s.button)}
          url={url}
          title={title ?? undefined}
        >
          <Facebook />
        </FacebookShareButton>
      </li>
    </ul>
  );
};

export default ShareButtons;
