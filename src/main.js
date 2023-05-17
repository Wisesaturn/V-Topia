import { $ } from '@utils/querySelector';

import App from './app';

window.addEventListener('DOMContentLoaded', () => {
  new App($('#app'));
});
