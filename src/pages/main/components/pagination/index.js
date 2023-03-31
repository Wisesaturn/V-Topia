import './style.css';
import { $ } from '@utils/querySelector';

class Pagination {
  constructor(number) {
    this.number = number;
    const pagination = $('#pagination');

    this.setState = (num) => {
      this.number = num;
    };

    this.render = () => {
      pagination.innerHTML = this.contentHTML();
    };

    this.contentHTML = () => {
      return `
        <div class="selected">아아</div>
        <div class="selected">아아</div>
        <div class="selected">아아</div>
        <div class="selected">아아</div>
      `;
    };

    this.render();
  }
}

export default Pagination;
