import './style.css';

class Pagination {
  constructor($container) {
    this.$container = $container;
    this.lastScrollTop = 0;
    this.currentSection = 1;
    this.totalSection = 5;

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
    };

    this.unmount = () => {
      this.$container.innerHTML = '';
    };

    this.contentHTML = () => {
      return `
        <div class="section selected"></div>
        <div class="section"></div>
        <div class="section"></div>
        <div class="section"></div>
      `;
    };

    window.addEventListener('scroll', () => {
      const currentScrollTop = window.scrollY;
      const scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';
      this.lastScrollTop = currentScrollTop;

      if (scrollDirection === 'down') {
        if (this.currentSection < 5) {
          this.currentSection++;
        } else if (this.currentSection > 1) {
          this.currentSection--;
        }
      }
    });

    this.render();
  }
}

export default Pagination;
