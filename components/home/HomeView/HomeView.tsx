import { Labo } from './Labo';
import type { VFC } from 'react';
import type { Props as LaboProps } from './Labo';

type Props = {
  labo?: LaboProps;
};

const HomeView: VFC<Props> = ({ labo }) => {
  return <>{labo && <Labo {...labo} />}</>;
};

export default HomeView;
