import Router from '@routes/router';

import { $ } from './utils/querySelector';

class App {
  constructor($container) {
    this.$container = $container;

    $('.link').addEventListener('click', (e) => {
      const target = e.target.closest('a');
      if (!(target instanceof HTMLAnchorElement)) return;

      e.preventDefault();
      history.pushState('', '', target);

      dispatchEvent(new Event('popstate'));
    });

    new Router($container);
  }
}

export default App;

// typeof
// return 값이 원시 타입 (primitive type)
// primitive type 구분할 때 사용

// instanceof
// return 값이 boolean 타입
// class, array, object 구분할 때 사용

// Element.closest()
// ()에 해당하는 태그를 찾아 반환 (자신부터 포함, 부모 방향)
// Element.parent()
// ()에 해당하는 부모 태그를 반환

// dispatchevent()
// 해당 event를 일으켜 등록된 eventlistener를 동기적으로 호출

// new CustomEvent('custom', {})
// event 커스텀 가능
// {} 안에 데이터 넣을 수 있음
