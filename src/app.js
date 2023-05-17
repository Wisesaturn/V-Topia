import Router from '@routes/router';

import { $ } from './utils/querySelector';

const LOCAL_URL = 'http://localhost:5173/';

class App {
  constructor($container) {
    this.$container = $container;

    const closedAllDropDown = () => {
      document.querySelectorAll('.dropDown').forEach((event) => {
        if (!event.classList.contains('closed')) {
          event.classList.add('closed');
          setTimeout(() => {
            event.classList.add('hidden');
          }, 300);
        } else {
          event.classList.remove('hidden');
        }
      });
    };

    /* SPA */
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

    /* DropDown */
    document.querySelectorAll('.dropDownTitle').forEach((event) => {
      event.addEventListener('click', (e) => {
        const { target } = e;
        if (!(target instanceof HTMLParagraphElement)) return;

        if ($(`.dropDown${target.id}`).classList.contains('closed')) {
          closedAllDropDown();
          $(`.dropDown${target.id}`).classList.toggle('closed');
        } else {
          closedAllDropDown();
        }
      });
    });

    new Router($container);
  }
}

export default App;
