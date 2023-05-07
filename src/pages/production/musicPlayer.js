class MusicPlayer {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {};

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
    };

    this.contentHTML = () => {
      return `
        <div class="musicPlayer" id="1">1</div>
        <div class="musicPlayer" id="2">2</div>
        <div class="musicPlayer" id="3">3</div>
        <div class="musicPlayer" id="4">4</div>
      `;
    };

    this.render();
  }
}

export default MusicPlayer;
