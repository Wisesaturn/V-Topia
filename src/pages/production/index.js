import './style.css';
import { $ } from '@utils/querySelector';

import MusicPlayer from './musicPlayer';

class ProductionPage {
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
        <main class="productionWrapper">
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

export default ProductionPage;
