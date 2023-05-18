import { $ } from '@utils/useQuerySelector';

export const closedAllDropDown = () => {
  document.querySelectorAll('.dropDown').forEach((event) => {
    if (!event.classList.contains('closed')) {
      event.classList.add('closed');
      setTimeout(() => {
        event.classList.add('hidden');
      }, 300);
    } else {
      event.classList.remove('hidden');
    }
  });
};

export default function useDropDown() {
  document.querySelectorAll('.dropDownTitle').forEach((event) => {
    event.addEventListener('click', (e) => {
      const { target } = e;
      if (!(target instanceof HTMLParagraphElement)) return;

      if ($(`.dropDown${target.id}`).classList.contains('closed')) {
        closedAllDropDown();
        $(`.dropDown${target.id}`).classList.toggle('closed');
      } else {
        closedAllDropDown();
      }
    });
  });
}
