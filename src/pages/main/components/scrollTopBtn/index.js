class scrollTopBtn {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {};

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
    };

    this.contentHTML = () => {
      return `
        <div class="scrollTopBtn">
        </div>
      `;
    };

    this.render();
  }
}

export default scrollTopBtn;
