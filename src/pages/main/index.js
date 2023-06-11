import { $ } from '@utils/useQuerySelector';

import VideoSection from './videoSection';
import ArtistSection from './artistSection';
import SourceSection from './sourceSection';
import ArchiveSection from './archiveSection';
import './style.scss';

class MainPage {
  constructor($container) {
    if (!$container) throw new Error('container is required');

    this.$container = $container;

    this.setState = () => {
      this.render();
    };

    this.render = () => {
      if (this.$container) this.$container.innerHTML = this.contentHTML();
      if ($('footer')) $('footer').style.display = 'none';
      new VideoSection($('.videoSection'));
      new ArtistSection($('.artistSection'));
      new ArchiveSection($('.archiveSection'));
      new SourceSection($('.SourceSection'));

      document.body.style.setProperty('overflow-y', 'hidden');
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
              <section class="SourceSection">
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
          if (album.classList.contains('flip')) return;

          album.classList.add('flip');
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
      const trailer = $('#trailer');
      if (!($('.videoSection') instanceof HTMLElement)) return;

      const videoPlayEvent = () => {
        if (videoPlay.classList.contains('clicked')) return;
        titleUp.style.top = '-20%';
        titleUp.style.opacity = '0';

        titleDown.style.top = '120%';
        titleDown.style.opacity = '0';

        videoPlay.classList.add('clicked');
        playBtn.classList.add('clicked');
        trailer.muted = false;
        videoPlay.removeEventListener('click', videoPlayEvent);
      };

      videoPlay.addEventListener('click', videoPlayEvent);
    };

    this.unmount = () => {
      document.body.style.setProperty('overflow-y', 'scroll');
      this.$container.innerHTML = '';

      $('footer').innerHTML = '© V-Topia';
      $('footer').style.display = 'block';
    };

    this.render();
  }
}

export default MainPage;
