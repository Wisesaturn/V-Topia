class JooaPage {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {
      this.render();
    };

    this.unmount = () => {
      this.$container.innerHTML = '';
    };

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
    };

    this.contentHTML = () => {
      return `
        <main class="jooaPage">
          <div class="dim"></div>
          주아페이지 입니다
        </main>
      `;
    };

    this.render();
  }
}

export default JooaPage;
