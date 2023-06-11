import { $ } from '@utils/useQuerySelector';
import './style.scss';

class MusicVideosPage {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {
      this.render();
    };

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
      if ($('footer')) $('footer').style.display = 'none';
    };

    this.contentHTML = () => {
      return `
        <main class="musicVideosPage">
          <video playsinline="" loop="" autoplay preload="metadata" data-desktop-url="https://cdn.v-topia.co.kr/V-Topia/Video/V-Topia-Trailer.mp4">
            <source src="https://cdn.v-topia.co.kr/V-Topia/Video/What-I-Want.mp4" type="video/mp4">
          </video>
        </main>
      `;
    };

    this.unmount = () => {
      this.$container.innerHTML = '';

      $('footer').innerHTML = '© V-Topia';
      $('footer').style.display = 'block';
    };

    this.render();
  }
}

export default MusicVideosPage;
