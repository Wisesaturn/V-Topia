class ArtistSection {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {};

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
    };

    this.contentHTML = () => {
      return `
        <img src="artist.png" alt="artist" />
      `;
    };

    this.render();
  }
}

export default ArtistSection;
