import MainPage from '.';

describe('Main Page Test', () => {
  let $container;
  let mainPage;

  beforeEach(() => {
    $container = document.createElement('div');
    mainPage = new MainPage($container);
  });

  afterEach(() => {
    $container.innerHTML = '';
  });

  it('should render main wrapper', () => {
    const main = $container.querySelector('.mainWrapper');
    expect(main).toBeTruthy();
  });

  it('should render every single section', () => {
    const artist = $container.querySelector('.artistSection');
    const archive = $container.querySelector('.archiveSection');
    const video = $container.querySelector('.videoSection');
    const jooa = $container.querySelector('.JooASection');

    expect(artist).toBeTruthy();
    expect(archive).toBeTruthy();
    expect(video).toBeTruthy();
    expect(jooa).toBeTruthy();
  });

  it('should update the rendered HTML content when setState() is called', () => {
    mainPage.setState();
    const expectedHTML = mainPage.contentHTML();
    expect($container.innerHTML).toBe(expectedHTML);
  });

  // it('should handle click event on videoPlay button', () => {
  //   const videoPlay = $container.querySelector('.videoPlay');
  //   const titleUp = $container.querySelector('.titleUp');
  //   const titleDown = $container.querySelector('.titleDown');

  //   videoPlay.click();

  //   expect(titleUp.style.top).toBe('-20%');
  //   expect(titleUp.style.opacity).toBe('0');
  //   expect(titleDown.style.top).toBe('120%');
  //   expect(titleDown.style.opacity).toBe('0');
  // });
});
