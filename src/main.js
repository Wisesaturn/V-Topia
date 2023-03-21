import { $ } from '@utils/querySelector';

import App from './app';

import '@styles/global.css';

window.addEventListener('DOMContentLoaded', () => {
  new App($('#app'));
});
