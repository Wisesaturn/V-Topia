import MainPage from '@pages/main';
import IntroducePage from '@pages/introduce';
import ArtistPage from '@pages/artist';

export const routes = [
  { path: '/', title: 'V-topia', page: MainPage },
  { path: '/introduce', title: 'V-topia : introduce', page: IntroducePage },
  { path: '/artist', title: 'V-topia : artist', page: ArtistPage },
];
