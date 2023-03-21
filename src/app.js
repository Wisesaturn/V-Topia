import Router from '@routes/router';

import { $ } from './utils/querySelector';

class App {
  constructor($container) {
    this.$container = $container;

    $('nav').addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState('', '', e.target.href);
    });
    new Router($container);
  }
}

export default App;
