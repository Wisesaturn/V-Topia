import './style.scss';
import { $ } from '@utils/querySelector';

class ProducerPage {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {
      this.render();
    };

    this.unmount = () => {
      this.$container.innerHTML = '';
      $('footer').innerHTML = '© V-Topia';
    };

    this.contentHTML = () => {
      return `
      <main class="producerPage">
        <div id="producer_dim" class="dim"></div>
        <section>
          <div class="inner">
              <div class="title">V-TOPIA</div>
              <div class="team" style="float: left; width: 50%;">
                  <p>Management Planning Team</p>  
              </div>
              <div class="name" style="float: left; width: 40%;">
                  <ul>
                      <li>Gong Hyunjung</li>
                      <li>Song Hayeon</li>
                      <li>Jo Yusang</li>
                      <li>Choi Mingyo</li>
                  </ul>
              </div>
              <div class="team" style="float: left; width: 50%;">
                  <p>Music Production Team</p>
              </div>
              <div class="name" style="float: left; width: 40%;">
                  <ul>
                      <li>Gong Hyunjung</li>
                      <li>Lee Chaerin</li>
                      <li>Song Myunghoon</li>
                  </ul>
              </div>
              <div class="team" style="float: left; width: 50%;">
                  <p>Video Production Team</p>
              </div>
              <div class="name" style="float: left; width: 40%;">
                  <ul>
                      <li>Choi Mingyo</li>
                      <li>Kim Jihyun</li>
                      <li>Geum Yurim</li>
                      <li>Lee Chaerin</li>
                  </ul>
              </div>
              <div class="team" style="float: left; width: 50%;">
                  <p>3D Modeling Team</p>
              </div>
              <div class="name" style="float: left; width: 40%;">
                  <ul>
                      <li>Song Hayeon</li>
                      <li>Yoo Youngjin</li>
                  </ul>
              </div>
              <div class="team" style="float: left; width: 50%;">
                  <p>Web Modeling Team</p>
              </div>
              <div class="name" style="float: left; width: 40%;">
                  <ul>
                    <li>Song Jaehan</li>
                      <li>Jo Seowoo</li> 
                  </ul>
              </div>
              <div class="team" style="float: left; width: 50%;">
                  <p>Design Team</p>
              </div>
              <div class="name" style="float: left; width: 40%;">
                  <ul>
                      <li>Kim Minji</li>
                      <li>Jung Chaeyeon</li>
                  </ul>
              </div>
            </div>
        </section>
        <div class="dim"></div>
      </main>
    `;
    };

    this.render = () => {
      $('footer').innerHTML = '';
      this.$container.innerHTML = this.contentHTML();
    };

    this.render();
  }
}

export default ProducerPage;
