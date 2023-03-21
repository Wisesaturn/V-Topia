import Router from '@routes/router';

import { $ } from './utils/querySelector';

const LOCAL_URL = 'http://localhost:5173/';

class App {
  constructor($container) {
    this.$container = $container;

    $('.link').addEventListener('click', (e) => {
      const target = e.target.closest('a');
      if (!(target instanceof HTMLAnchorElement)) return;

      e.preventDefault();
      if (String(target).replace(LOCAL_URL, '/') === location.pathname)
        history.replaceState('', '', target);
      else history.pushState('', '', target);

      dispatchEvent(new Event('popstate'));
    });

    new Router($container);
  }
}

export default App;
