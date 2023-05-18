import './style.scss';
import { $ } from '@utils/useQuerySelector';

class Sitemap {
  constructor($container) {
    this.$container = $container;

    const toggleSitemap = () => {
      $('#sitemap').classList.toggle('closed');
    };

    this.setState = () => {
      this.render();
    };

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
      if ($('#closeBtn')) $('#closeBtn').addEventListener('click', toggleSitemap);
      $('#openSitemap').addEventListener('click', toggleSitemap);
    };

    this.contentHTML = () => {
      return `
        <span id="closeBtn" class="likedCircleBtn">close</span>
        <div>카테고리 영역</div>
        <div>SNS 영역</div>
      `;
    };

    this.render();
  }
}

export default Sitemap;
