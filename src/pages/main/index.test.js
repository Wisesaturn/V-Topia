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

  test('should update the rendered HTML content when setState() is called', () => {
    mainPage.setState();
    const expectedHTML = mainPage.contentHTML();
    expect($container.innerHTML).toBe(expectedHTML);
  });
});
