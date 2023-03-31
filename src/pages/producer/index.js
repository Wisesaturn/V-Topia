class ProducerPage {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {
      this.render();
    };

    this.unmount = () => {
      this.$container = '';
    };

    this.render = () => {
      this.$container.innerHTML = `
      <main class="producerPage">
        프로듀서페이지 입니다
      </main>
    `;
    };

    this.render();
  }
}

export default ProducerPage;
