class VivianPage {
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
        <main class="vivianPage">
          <div class="dim"></div>
          비비안페이지 입니다
        </main>
      `;
    };

    this.render();
  }
}

export default VivianPage;
