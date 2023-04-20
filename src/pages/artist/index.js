class ArtistPage {
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
      <main class="artistPage">
        아티스트페이지 입니다
      </main>
    `;
    };

    this.render();
  }
}

export default ArtistPage;
