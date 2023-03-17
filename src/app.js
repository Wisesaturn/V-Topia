import MainPage from '@pages/main';

class App {
  constructor($container) {
    this.$container = $container;

    new MainPage($container);
  }
}

export default App;
