import './style.css';

class MainPage {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {
      this.render();
    };

    this.render = () => {
      this.$container.innerHTML = `
        <main class="mainWrapper">
          메인페이지 입니다
        </main>
      `;
    };

    this.render();
  }
}

export default MainPage;
