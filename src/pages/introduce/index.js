class IntroducePage {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {
      this.render();
    };

    this.render = () => {
      this.$container.innerHTML = `
      <main class="introducePage">
        소개페이지 입니다
      </main>
    `;
    };

    this.render();
  }
}

export default IntroducePage;
