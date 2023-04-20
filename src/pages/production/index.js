class ProductionPage {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {
      this.render();
    };

    this.unmount = () => {
      this.$container.innerHTML = '';
    };

    this.render = () => {
      this.$container.innerHTML = `
      <main class="productionPage">
        프로덕션페이지 입니다
      </main>
    `;
    };

    this.render();
  }
}

export default ProductionPage;
