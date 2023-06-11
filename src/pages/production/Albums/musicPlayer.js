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
          MusicMp3Url: 'https://cdn.v-topia.co.kr/V-Topia/Music/You.mp3',
          MusicWavUrl: 'https://cdn.v-topia.co.kr/V-Topia/Music/You.wav',
          title: 'You',
          explain: `Composed by 송명훈
                    Lyrics by 송명훈, 이채린
                    Arranged by 송명훈
          `,
        },
        {
          thumbnailUrl: 'https://cdn.v-topia.co.kr/V-Topia/Music/Thumbnail_You.png',
          MusicMp3Url: 'https://cdn.v-topia.co.kr/V-Topia/Music/Hello-my-friends.mp3',
          MusicWavUrl: 'https://cdn.v-topia.co.kr/V-Topia/Music/Hello-my-friends.wav',
          title: 'Hello My Friends',
          explain: `Composed by 송명훈
                    Lyrics by 송명훈, 이채린
                    Arranged by 송명훈
          `,
        },
        {
          thumbnailUrl: 'https://cdn.v-topia.co.kr/V-Topia/Music/Thumbnail_You.png',
          MusicMp3Url: 'https://cdn.v-topia.co.kr/V-Topia/Music/What-I-Want.mp3',
          MusicWavUrl: 'https://cdn.v-topia.co.kr/V-Topia/Music/What-I-Want.wav',
          title: 'What I Want!',
          explain: `Composed by 공현중, 송명훈, 이채린
                    Lyrics by 공현중, 이채린, 송명훈
                    Arranged by 공현중, 송명훈
          `,
        },
        {
          thumbnailUrl: 'https://cdn.v-topia.co.kr/V-Topia/Music/Thumbnail_You.png',
          MusicMp3Url: 'https://cdn.v-topia.co.kr/V-Topia/Music/Sunrise.mp3',
          MusicWavUrl: 'https://cdn.v-topia.co.kr/V-Topia/Music/Sunrise.wav',
          title: 'Sunrise',
          explain: `Composed by 이채린
                    Lyrics by 이채린
                    Arranged by 공현중, 이채린
          `,
        },
      ];

      const musics = musicsData.map((music, idx) => {
        const { thumbnailUrl, explain, title, MusicMp3Url, MusicWavUrl } = music;

        return `
         <div class="musicPlayerWrapper" id=${idx}>
          <div class="musicPlayerContainer" id=${idx}>
            <div class="thumbnail">
              <img src=${thumbnailUrl} alt="Thumbnail_You" ></img>
            </div>
            <div class="explain-title">${title}</div>
            <div class="explain">${explain}</div>
          </div>
          <audio class="playerline" id="audio-player" controls controlsList="nodownload">
            <source src=${MusicWavUrl} type="audio/wav">
            <source src=${MusicMp3Url} type="audio/mp3">
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
