import Router from '@routes/router';

import { $ } from './utils/querySelector';

class App {
  constructor($container) {
    this.$container = $container;

    $('.link').addEventListener('click', (e) => {
      const target = e.target.closest('a');
      if (!(target instanceof HTMLAnchorElement)) return;

      e.preventDefault();
      history.pushState('', '', target);

      dispatchEvent(new Event('popstate'));
    });

    new Router($container);
  }
}

export default App;
