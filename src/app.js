import Router from '@routes/router';

import { $ } from './utils/querySelector';

const LOCAL_URL = 'http://localhost:5173/';

class App {
  constructor($container) {
    this.$container = $container;

    const closedAllDropDown = () => {
      document.querySelectorAll('.dropDown').forEach((event) => {
        if (!event.classList.contains('closed')) event.classList.add('closed');
      });
    };

    $('.link').addEventListener('click', (e) => {
      const target = e.target.closest('a');
      if (!(target instanceof HTMLAnchorElement)) return;

      e.preventDefault();
      if (String(target).replace(LOCAL_URL, '/') === location.pathname)
        history.replaceState('', '', target);
      else history.pushState('', '', target);

      closedAllDropDown();
      dispatchEvent(new Event('popstate'));
    });

    document.querySelectorAll('.dropDownTitle').forEach((event) => {
      event.addEventListener('click', (e) => {
        const { target } = e;
        if (!(target instanceof HTMLElement) || this.openDropDown) return;

        closedAllDropDown();
        $(`.dropDown${target.id}`).classList.toggle('closed');
      });
    });

    new Router($container);
  }
}

export default App;
