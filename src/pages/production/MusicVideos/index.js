import { $ } from '@utils/useQuerySelector';

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
          <div style="text-align: center; margin-top: 40px;">
          <iframe width="1300" height="700" src="https://www.youtube.com/embed/do6qxlhM5fI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

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
