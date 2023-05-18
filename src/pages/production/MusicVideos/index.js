import { $ } from '@utils/querySelector';

class MusicVideosPage {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {
      this.render();
    };

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
    };

    this.contentHTML = () => {
      return `
        <main class="musicVideosPage">
          <div class="dim"></div>
          뮤직비디오 페이지입니다.
        </main>
      `;
    };

    this.unmount = () => {
      this.$container.innerHTML = '';
    };

    this.render();
  }
}

export default MusicVideosPage;
