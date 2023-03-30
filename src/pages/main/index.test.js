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

  it('should render artist section', () => {
    const artist = $container.querySelector('.artistSection');
    expect(artist).toBeTruthy();
  });

  it('should render archive section', () => {
    const archive = $container.querySelector('.archiveSection');
    expect(archive).toBeTruthy();
  });

  it('should render video section', () => {
    const video = $container.querySelector('.videoSection');
    expect(video).toBeTruthy();
  });

  it('should render JooA section', () => {
    const jooa = $container.querySelector('.JooASection');
    expect(jooa).toBeTruthy();
  });

  test('should update the rendered HTML content when setState() is called', () => {
    mainPage.setState();
    const expectedHTML = mainPage.contentHTML();
    expect($container.innerHTML).toBe(expectedHTML);
  });
});
