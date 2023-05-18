import './style.scss';

class AuditionPage {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {
      this.render();
    };

    this.unmount = () => {
      this.$container.innerHTML = '';
    };

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
    };

    this.contentHTML = () => {
      return `
        <main class="AuditionPage">
          <div id="audition_dim" class="dim"></div>
          <section>
            <ul class="inner">
            <li class="first">AUDITION</li>
            <li class="second">브이토피아가 당신의 도전을 기다리고 있습니다.</li>
                <li class="third">
                    <img src="./email.png" alt="v_topia@naver.com">
                </li>
                <li class="fourth">PROCESS</li>
                <li class="fifth">
                    <img src="./process.png" alt="서류심사 - 1차 오디션 - 최종 면접">
                </li>
                </ul>
          </section>
        </main>
      `;
    };

    this.render();
  }
}

export default AuditionPage;
