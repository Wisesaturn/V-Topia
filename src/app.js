
import MainPage from "@pages/main";

export class App {
  constructor($container) {
    this.$container = $container;

    new MainPage($container);
  }
}

export default App;
