import './style.css';

import { $ } from '@utils/querySelector';

class Pagination {
  constructor($container) {
    this.$container = $container;
    this.cur = 1;
    this.total = 5;

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
      this.bindEvents();
    };

    this.unmount = () => {
      this.$container.innerHTML = '';
    };

    this.bindEvents = () => {};

    this.contentHTML = () => {
      return `
        <div class="section selected"></div>
        <div class="section"></div>
        <div class="section"></div>
        <div class="section"></div>
      `;
    };

    this.render();
  }
}

export default Pagination;
