class VideoSection {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {};

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
    };

    this.contentHTML = () => {
      return `
        <div class="title titleUp">
          <h1>V-TOPIA</h1>
        </div>
        <div class="videoPlay">
          <div class="material-icons playbtn">play_arrow</div>
        </div>
        <div class="title titleDown">
          <h1>PLAY ON CLICK</h1>
        </div>
        <div class="videoSource">
          <video playsinline="" muted="" loop="" id="trailer" autoplay preload="metadata" data-desktop-url="https://cdn.v-topia.co.kr/V-Topia/Video/V-Topia-Trailer.mp4">
            <source src="https://cdn.v-topia.co.kr/V-Topia/Video/V-Topia-Trailer.mp4" type="video/mp4">
          </video>
        </div>
      `;
    };

    this.render();
  }
}

export default VideoSection;
