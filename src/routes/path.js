import main from '@pages/main';
import introduce from '@pages/introduce';
import artist from '@pages/artist';

export const routes = {
  '/': { title: 'V-topia', render: main },
  '/introduce': { title: 'V-topia : introduce', render: introduce },
  '/artist': { title: 'V-topia : artist', render: artist },
};
