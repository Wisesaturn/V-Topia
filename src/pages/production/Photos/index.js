import { $ } from '@utils/useQuerySelector';

class PhotosPage {
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
        <main class="photosPage">
          <div class="dim"></div>
          포토 페이지입니다.
        </main>
      `;
    };

    this.unmount = () => {
      this.$container.innerHTML = '';
    };

    this.render();
  }
}

export default PhotosPage;
