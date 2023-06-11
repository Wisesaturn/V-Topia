class ArchiveSection {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {};

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
    };

    this.contentHTML = () => {
      return `
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
                <img src="https://cdn.v-topia.co.kr/V-Topia/Image/vivian-album.webp" alt="Thumbnail">
              </div>
              <div class="back">
               <a href="https://v-topia.co.kr/production/albums">
                <p>Vivian</p>
                <div class="material-icons playbtn">play_arrow</div>
               </a>
              </div>
            </div>
            <div class="album">
              <div class="front">
                <img src="https://cdn.v-topia.co.kr/V-Topia/Image/jooa-album.webp" alt="Thumbnail">
              </div>
              <div class="back">
                <a href="https://v-topia.co.kr/production/albums">
                  <p>Jooa</p>
                  <div class="material-icons playbtn">play_arrow</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    };

    this.render();
  }
}

export default ArchiveSection;
