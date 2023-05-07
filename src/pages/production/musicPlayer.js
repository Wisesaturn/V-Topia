class MusicPlayer {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {};

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
    };

    this.contentHTML = () => {
      return `
        <div class="musicPlayerWrapper" id="1">
          <div class="musicPlayerContainer" id="1">
            <div class="thumbnail">thumbnail</div>
            <div class="explain">explain</div>
          </div>
          <div class="playerline material-icons">
            <span class="isButton">play_arrow</span>
            <div class="playerlineGauge"></div>  
          </div>
        </div>
         <div class="musicPlayerWrapper" id="2">
          <div class="musicPlayerContainer" id="2">
            <div class="thumbnail">thumbnail</div>
            <div class="explain">explain</div>
          </div>
          <div class="playerline material-icons">
            <span class="isButton">play_arrow</span>
            <div class="playerlineGauge"></div>  
          </div>
        </div>
         <div class="musicPlayerWrapper" id="3">
          <div class="musicPlayerContainer" id="3">
            <div class="thumbnail">thumbnail</div>
            <div class="explain">explain</div>
          </div>
          <div class="playerline material-icons">
            <span class="isButton">play_arrow</span>
            <div class="playerlineGauge"></div>  
          </div>
        </div>
         <div class="musicPlayerWrapper" id="4">
          <div class="musicPlayerContainer" id="4">
            <div class="thumbnail">thumbnail</div>
            <div class="explain">explain</div>
          </div>
          <div class="playerline material-icons">
            <span class="isButton">play_arrow</span>
            <div class="playerlineGauge"></div>  
          </div>
        </div>
      `;
    };

    this.render();
  }
}

export default MusicPlayer;
