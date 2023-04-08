import './style.css';
import { $ } from '@utils/querySelector';

import Pagination from './components/pagination';

class MainPage {
  constructor($container) {
    if (!$container) throw new Error('container is required');

    this.$container = $container;
    this.pagination = '';

    this.setState = () => {
      this.render();
    };

    this.render = () => {
      // document.body.style.setProperty('overflow', 'hidden');
      this.$container.innerHTML = this.contentHTML();
      this.useAlbumFlip();
      this.useVideoPlay();
      if (document.getElementById('pagination')) this.pagination = new Pagination($('#pagination'));
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
        videoPlay.removeEventListener('click', videoPlayEvent);
      };

      videoPlay.addEventListener('click', videoPlayEvent);
    };

    this.unmount = () => {
      document.body.style.setProperty('overflow-y', 'scroll');
      this.$container.innerHTML = '';
      if (this.pagination) this.pagination.unmount();
    };

    this.render();
  }
}

export default MainPage;
