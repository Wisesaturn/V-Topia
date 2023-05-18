import Router from '@routes/router';
import useDropDown from '@utils/useDropDown';
import useSPA from '@utils/useSPA';
import Sitemap from '@components/sitemap';

import '@styles/dropDown.css';

class App {
  constructor($container) {
    this.$container = $container;

    /* SPA */
    useSPA();
    /* DropDown */
    useDropDown();

    new Router($container);
    new Sitemap(document.getElementById('sitemap'));
  }
}

export default App;
