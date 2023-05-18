class Sitemap {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {};

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
    };

    this.contentHTML = () => {
      return `
        menu
      `;
    };

    this.render();
  }
}

export default Sitemap;
