class AuditionPage {
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
      <main class="AuditionPage">
        오디션페이지 입니다
      </main>
    `;
    };

    this.render();
  }
}

export default AuditionPage;
