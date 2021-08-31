import { Seo } from '@components/common';
import { Labo } from './Labo';
import type { VFC } from 'react';
import type { Props as LaboProps } from './Labo';

type Props = {
  labo?: LaboProps;
};

const HomeView: VFC<Props> = ({ labo }) => {
  return (
    <>
      <Seo title={'Carewill Labo'} titleTemplate={'Carewill Labo'} />
      {labo && <Labo {...labo} />}
    </>
  );
};

export default HomeView;
