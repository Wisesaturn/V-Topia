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
          <h1>VIVIAN TITLE</h1>
        </div>
        <div class="videoPlay">
          <div class="material-icons playbtn">play_arrow</div>
        </div>
        <div class="title titleDown">
          <h1>PLAY ON CLICK</h1>
        </div>
        <div class="videoSource">
          <video playsinline="" muted="" loop="" autoplay preload="metadata" data-desktop-url="https://smtown-cdn.smtown.com/upload/smtown/main/video/13881e131eb1407382e6599e13c8fd4b_2023-04-14-09-24-01.mp4" data-mobile-url="https://smtown-cdn.smtown.com/upload/smtown/main/video/094ac37e480d44b6aa4a81cebdf33e8c_2023-04-14-09-27-36.mp4">
            <source src="https://smtown-cdn.smtown.com/upload/smtown/main/video/13881e131eb1407382e6599e13c8fd4b_2023-04-14-09-24-01.mp4" type="video/mp4">
          </video>
        </div>
      `;
    };

    this.render();
  }
}

export default VideoSection;
