import { $ } from '@utils/useQuerySelector';
import './style.scss';

class MusicVideosPage {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {
      this.render();
    };

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
      this.useVideoPlay('Vivian');
      this.useVideoPlay('Jooa');
      if ($('footer')) $('footer').style.display = 'none';
    };

    this.contentHTML = () => {
      return `
        <main class="musicVideosPage">
          <swiper-container direction="vertical" pagination="true" pagination-clickable="true" space-between="30" mousewheel="true">
              <swiper-slide>
                <section class="videoSection">
                  <div class="title titleUpVivian">
                    <h1>What I Want !</h1>
                  </div>
                  <div class="videoPlayVivian">
                    <div class="material-icons playbtnVivian">play_arrow</div>
                  </div>
                  <div class="title titleDownVivian">
                    <h1>Vivian</h1>
                  </div>
                  <div class="videoSource">
                    <video playsinline="" loop="" id="Vivian" autoplay muted preload="metadata" data-desktop-url="https://cdn.v-topia.co.kr/V-Topia/Video/What-I-Want.mp4">
                      <source src="https://cdn.v-topia.co.kr/V-Topia/Video/What-I-Want.mp4" type="video/mp4">
                    </video>
                  </div>
                </section>
              </swiper-slide>
              <swiper-slide>
                <section class="videoSection">
                  <div class="title titleUpJooa">
                    <h1>Sunrise</h1>
                  </div>
                  <div class="videoPlayJooa">
                    <div class="material-icons playbtnJooa">play_arrow</div>
                  </div>
                  <div class="title titleDownJooa">
                    <h1>Jooa</h1>
                  </div>
                  <div class="videoSource">
                    <video playsinline="" loop="" id="Jooa" autoplay muted preload="metadata" data-desktop-url="https://cdn.v-topia.co.kr/V-Topia/Video/What-I-Want.mp4">
                      <source src="https://cdn.v-topia.co.kr/V-Topia/Video/Sunrise.mp4" type="video/mp4">
                    </video>
                  </div>
                </section>
              </swiper-slide>
            </swiper-container>
        </main>
      `;
    };

    this.useVideoPlay = (target) => {
      const videoPlay = $(`.videoPlay${target}`);
      const playBtn = $(`.playbtn${target}`);
      const titleUp = $(`.titleUp${target}`);
      const titleDown = $(`.titleDown${target}`);
      const video = $(`#${target}`);

      const videoPlayEvent = () => {
        if (videoPlay.classList.contains('clicked')) return;
        titleUp.style.top = '-20%';
        titleUp.style.opacity = '0';

        titleDown.style.top = '120%';
        titleDown.style.opacity = '0';

        videoPlay.classList.add('clicked');
        playBtn.classList.add('clicked');
        video.muted = false;

        videoPlay.removeEventListener('click', videoPlayEvent);
      };

      videoPlay.addEventListener('click', videoPlayEvent);
    };

    this.unmount = () => {
      this.$container.innerHTML = '';

      $('footer').innerHTML = '© V-Topia';
      $('footer').style.display = 'block';
    };

    this.render();
  }
}

export default MusicVideosPage;
