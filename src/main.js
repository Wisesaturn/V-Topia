import { $ } from '@utils/useQuerySelector';

import App from './app';

window.addEventListener('DOMContentLoaded', () => {
  new App($('#app'));
});
