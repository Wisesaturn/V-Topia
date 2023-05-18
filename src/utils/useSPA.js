import { $ } from '@utils/useQuerySelector';
import { closedAllDropDown } from '@utils/useDropDown';

export default function useSPA() {
  const LOCAL_URL = 'http://localhost:5173/';

  $('.link').addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (!(target instanceof HTMLAnchorElement)) return;

    e.preventDefault();
    if (String(target).replace(LOCAL_URL, '/') === location.pathname)
      history.replaceState('', '', target);
    else history.pushState('', '', target);

    closedAllDropDown();
    dispatchEvent(new Event('popstate'));
  });
}
