import MainPage from '@pages/main';
import IntroducePage from '@pages/introduce';
import ViVianPage from '@pages/artist/vivian';
import JooaPage from '@pages/artist/jooa';
import AlbumsPage from '@pages/production/Albums';
import AuditionPage from '@pages/audition';
import ProducerPage from '@pages/producer';

export const routes = [
  { path: '/', title: 'V-topia', page: MainPage },
  { path: '/introduce', title: 'V-topia : introduce', page: IntroducePage },
  { path: '/artist/vivian', title: 'V-topia : artist - Vivian', page: ViVianPage },
  { path: '/artist/jooa', title: 'V-topia : artist - Jooa', page: JooaPage },
  { path: '/production/albums', title: 'V-topia : production - albums', page: AlbumsPage },
  { path: '/audition', title: 'V-topia : audition', page: AuditionPage },
  { path: '/producer', title: 'V-topia : producer', page: ProducerPage },
];
