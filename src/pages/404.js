class ErrornPage {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {
      this.render();
    };

    this.render = () => {
      this.$container.innerHTML = `
      <main class="errorPage">
        해당 페이지를 찾을 수 없습니다
      </main>
    `;
    };

    this.render();
  }
}

export default ErrorPage;
