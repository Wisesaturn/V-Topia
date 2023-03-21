import MainPage from '@pages/main';
import IntroducePage from '@pages/introduce';
import ArtistPage from '@pages/artist';
import ProductionPage from '@pages/production';
import AuditionPage from '@pages/audition';
import ProducerPage from '@pages/producer';

export const routes = [
  { path: '/', title: 'V-topia', page: MainPage },
  { path: '/introduce', title: 'V-topia : introduce', page: IntroducePage },
  { path: '/artist', title: 'V-topia : artist', page: ArtistPage },
  { path: '/production', title: 'V-topia : production', page: ProductionPage },
  { path: '/audition', title: 'V-topia : production', page: AuditionPage },
  { path: '/producer', title: 'V-topia : production', page: ProducerPage },
];
