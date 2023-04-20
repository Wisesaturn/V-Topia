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
      this.$container.innerHTML = `
      <main class="AuditionPage">
        오디션페이지 입니다
        <br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        페이지 테스트
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
        </div>
      </main>
    `;
    };

    this.render();
  }
}

export default AuditionPage;
