import './style.css';

class Pagination {
  constructor($container) {
    this.$container = $container;
    this.isScrollTop = 0;
    this.currentSection = 1;
    this.totalSection = 5;

    const scrollEvent = () => {
      const currentScrollTop = window.scrollY;
      const scrollDirection = currentScrollTop > this.isScrollTop ? 'down' : 'up';
      this.isScrollTop = currentScrollTop;

      if (scrollDirection === 'down') {
        if (this.currentSection === 5) return;
        this.currentSection++;
      } else if (scrollDirection === 'up') {
        if (this.currentSection === 1) return;
        this.currentSection--;
      }
    };

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
    };

    this.contentHTML = () => {
      return `
        <div class="section selected"></div>
        <div class="section"></div>
        <div class="section"></div>
        <div class="section"></div>
      `;
    };

    this.unmount = () => {
      this.$container.innerHTML = '';
      window.removeEventListener('scroll', scrollEvent);
    };

    window.addEventListener('scroll', scrollEvent);
    this.render();
  }
}

export default Pagination;
