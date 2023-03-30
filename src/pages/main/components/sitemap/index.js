class Sitemap {
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
        <div id="menu">
          메뉴
        </div>
      `;
    };

    this.render();
  }
}

export default Sitemap;
