import './style.css';
import Pagination from './components/pagination';

class MainPage {
  constructor($container) {
    this.$container = $container;
    this.pagination = '';

    this.setState = () => {
      this.render();
    };

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
      this.pagination = new Pagination();
    };

    this.unmount = () => {
      this.$container = '';
      this.pagination = '';
    };

    this.contentHTML = () => {
      return `
        <main class="mainWrapper">
          <section class="artistSection">
            <div class="image">Image</div>
            <div class="image">Image</div>
          </section>
          <section class="archiveSection">
            <div class="title">
              V-TOPIA ’s VIRTUAL ARTIST VIVIAN V-TOPIA ’s VIRTUAL ARTIST VIVIAN
            </div>
            <div class="subtitle">
              Archives
            </div>
            <div class="archivesWrapper">
              <div class="archives">
                <div class="album">
                  Album
                </div>
                <div class="album">
                  Album
                </div>
              </div>
            </div>
          </section>
          <section class="videoSection">
            <div class="title titleUp">
              <h1>VIVIAN TITLE</h1>
            </div>
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

    this.render();
  }
}

export default MainPage;
