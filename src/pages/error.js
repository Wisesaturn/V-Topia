class ErrorPage {
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
      <main class="errorPage">
        <div class="dim"></div>
        <h2>해당 페이지를 찾을 수 없습니다</h2>
      </main>
    `;
    };

    this.render();
  }
}

export default ErrorPage;
