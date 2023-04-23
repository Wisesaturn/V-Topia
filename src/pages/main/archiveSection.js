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
      `;
    };

    this.render();
  }
}

export default ArchiveSection;
