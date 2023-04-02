import './style.css';

import { $ } from '@utils/querySelector';

class MainPage {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {
      this.render();
    };

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
      this.useflip();
      this.useVideoPlay();
    };

    this.contentHTML = () => {
      return `
        <main class="mainWrapper">
          <section class="artistSection">
            <div class="image">Image</div>
            <div class="image">Image</div>
          </section>
          <section class="archiveSection">
            <div class="archiveTitle" data-content="V-TOPIA ’s VIRTUAL ARTIST VIVIAN V-TOPIA ’s VIRTUAL ARTIST VIVIAN">
              V-TOPIA ’s VIRTUAL ARTIST VIVIAN
            </div>
            <div class="subtitle">
              Archives
            </div>
            <div class="archivesWrapper">
              <div class="archives">
                <div class="album">
                  <div class="front">
                    앞면 내용
                  </div>
                  <div class="back">
                    뒷면 내용
                  </div>
                </div>
                <div class="album">
                  <div class="front">
                    앞면 내용
                  </div>
                  <div class="back">
                    뒷면 내용
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="videoSection">
            <div class="title titleUp">
              <h1>VIVIAN TITLE</h1>
            </div>
            <div class="videoPlay"></div>
            <div class="title titleDown">
              <h1>PLAY ON CLICK</h1>
            </div>
          </section>
          <section class="JooASection">
            <h1>JooA</h1>
            <div class="video">
              video
            </div>
          </section>
        </main>
      `;
    };

    this.useflip = () => {
      const albums = document.querySelectorAll('.album');

      albums.forEach((album) => {
        album.addEventListener('click', () => {
          album.classList.toggle('flip');
        });
      });
    };

    this.unUseflip = () => {
      const albums = document.querySelectorAll('.album');

      albums.forEach((album) => {
        album.removeEventListener('click', () => {
          album.classList.toggle('flip');
        });
      });
    };

    this.useVideoPlay = () => {
      const videoPlay = $('.videoPlay');
      const titleUp = $('.titleUp');
      const titleDown = $('.titleDown');

      videoPlay.addEventListener('click', () => {
        if (videoPlay.classList.contains('clicked')) return;
        titleUp.style.top = '-20%';
        titleUp.style.opacity = '0';

        titleDown.style.top = '120%';
        titleDown.style.opacity = '0';

        videoPlay.classList.add('clicked');
      });
    };

    this.unmount = () => {
      $('.videoPlay').removeEventListener('click', this.useVideoPlay());
    };

    this.render();
  }
}

export default MainPage;
