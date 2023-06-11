class SourceSection {
  constructor($container) {
    this.$container = $container;

    this.setState = () => {};

    this.render = () => {
      this.$container.innerHTML = this.contentHTML();
    };

    this.contentHTML = () => {
      return `
       
      `;
    };

    this.render();
  }
}

export default SourceSection;
