import { setupCounter } from '@components/counter';

document.querySelector('#app').innerHTML = `
  <div>
    V-Topia 입니다.
  </div>
`;

setupCounter(document.querySelector('#counter'));
