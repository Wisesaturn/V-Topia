import './style.css';
import { $ } from '@utils/querySelector';

import VideoSection from './videoSection';
import ArtistSection from './artistSection';
import ArchiveSection from './archiveSection';

class MainPage {
  constructor($container) {
    if (!$container) throw new Error('container is required');

    this.$container = $container;

    this.setState = () => {
      this.render();
    };

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
      $('footer').innerHTML = '';
      new VideoSection($('.videoSection'));
      new ArtistSection($('.artistSection'));
      new ArchiveSection($('.archiveSection'));

      this.useAlbumFlip();
      this.useVideoPlay();
    };

    this.contentHTML = () => {
      return `
        <main class="mainWrapper">
          <swiper-container direction="vertical" pagination="true" pagination-clickable="true" space-between="30" mousewheel="true">
            <swiper-slide>
              <section class="artistSection">
              </section>
            </swiper-slide>
            <swiper-slide>
              <section class="archiveSection">
              </section>
            </swiper-slide>
            <swiper-slide>
              <section class="videoSection">
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
          <div class="scrollTopBtnContainer"></div>
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
