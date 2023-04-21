import './style.css';
import { $ } from '@utils/querySelector';

class MainPage {
  constructor($container) {
    if (!$container) throw new Error('container is required');

    this.$container = $container;

    this.setState = () => {
      this.render();
    };

    this.render = () => {
      $('footer').innerHTML = '';
      this.$container.innerHTML = this.contentHTML();
      this.useAlbumFlip();
      this.useVideoPlay();
    };

    this.contentHTML = () => {
      return `
        <main class="mainWrapper">
          <swiper-container direction="vertical" pagination="true" pagination-clickable="true" space-between="30" mousewheel="true">
            <swiper-slide>
            <section class="artistSection">
              <div class="image">Image</div>
              <div class="image">Image</div>
              </section>
            </swiper-slide>
            <swiper-slide>
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
            </swiper-slide>
            <swiper-slide>
              <section class="videoSection">
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
              </section>
            </swiper-slide>
            <swiper-slide>
              <section class="JooASection">
                <h1>JooA</h1>
                <div class="video">
                  video
                </div>
              </section>
            </swiper-slide>
          </swiper-container>
        </main>
      `;
    };

    this.useAlbumFlip = () => {
      const albums = document.querySelectorAll('.album');

      albums.forEach((album) => {
        const albumEvent = () => {
          album.classList.toggle('flip');
        };

        if (album.classList.contains('flipOn')) return;
        album.classList.add('flipOn');

        album.addEventListener('click', albumEvent);
      });
    };

    this.useVideoPlay = () => {
      const videoPlay = $('.videoPlay');
      const playBtn = $('.playbtn');
      const titleUp = $('.titleUp');
      const titleDown = $('.titleDown');
      if (!($('.videoSection') instanceof HTMLElement)) return;

      const videoPlayEvent = () => {
        if (videoPlay.classList.contains('clicked')) return;
        titleUp.style.top = '-20%';
        titleUp.style.opacity = '0';

        titleDown.style.top = '120%';
        titleDown.style.opacity = '0';

        videoPlay.classList.add('clicked');
        playBtn.classList.add('clicked');
        videoPlay.removeEventListener('click', videoPlayEvent);
      };

      videoPlay.addEventListener('click', videoPlayEvent);
    };

    this.unmount = () => {
      document.body.style.setProperty('overflow-y', 'scroll');
      this.$container.innerHTML = '';
      $('footer').innerHTML = '© V-Topia';
    };

    this.render();
  }
}

export default MainPage;
