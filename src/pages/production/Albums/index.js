import './style.scss';
import { $ } from '@utils/useQuerySelector';

import MusicPlayer from './musicPlayer';

class AlbumsPage {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {
      this.render();
    };

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
      new MusicPlayer($('.playerSection'));
    };

    this.contentHTML = () => {
      return `
        <main class="albumsPage">
          <div class="dim"></div>
          <section class="playerSection">
          </section>
        </main>
      `;
    };

    this.unmount = () => {
      this.$container.innerHTML = '';
    };

    this.render();
  }
}

export default AlbumsPage;
