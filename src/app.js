
import { $ } from '@utils/querySelector';
import MainPage from "@pages/main";

export class App {
  constructor($container) {
    this.$container = $container;

    new MainPage($('#app'));
  }
}

export default App;
