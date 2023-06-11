class MusicPlayer {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {};

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
      console.log(this.contentHTML());
    };

    this.contentHTML = () => {
      const musicsData = [
        {
          thumbnailUrl: 'https://cdn.v-topia.co.kr/V-Topia/Music/Thumbnail_You.png',
          MusicUrl: 'https://cdn.v-topia.co.kr/V-Topia/Music/You.mp3',
          explain: 'You',
        },
        {
          thumbnailUrl: '',
          MusicUrl: '',
          explain: 'empty',
        },
        {
          thumbnailUrl: '',
          MusicUrl: '',
          explain: 'empty',
        },
        {
          thumbnailUrl: '',
          MusicUrl: '',
          explain: 'empty',
        },
      ];

      const musics = musicsData.map((music, idx) => {
        return `
         <div class="musicPlayerWrapper" id=${idx}>
          <div class="musicPlayerContainer" id=${idx}>
            <div class="thumbnail">
              <img src=${music.thumbnailUrl} alt="Thumbnail_You" ></img>
            </div>
            <div class="explain">${music.explain}</div>
          </div>
          <audio class="playerline" id="audio-player" controls>
            <source src=${music.MusicUrl} type="audio/mp3">
            Your browser does not support the audio element.
          </audio>
        </div>
        `;
      });

      return musics.join('');
    };

    this.render();
  }
}

export default MusicPlayer;
