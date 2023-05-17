import ErrorPage from '@pages/error';
import { $ } from '@utils/querySelector';

import { routes } from './path';

class Router {
  constructor($container) {
    this.$container = $container;
    let currentPage = '';
    let isData = '';

    const findMatchedPath = (currentPath) => {
      const findData = routes.find((route) => {
        return route.path === currentPath;
      });

      return findData ?? false;
    };

    const setMetaTag = () => {
      $('title').innerHTML = isData?.title;
    };

    const routing = () => {
      if (currentPage) currentPage.unmount();
      isData = findMatchedPath(location.pathname);
      const TargetPage = isData.page || ErrorPage;
      if (isData) setMetaTag();
      currentPage = new TargetPage($container);
    };

    window.addEventListener('popstate', () => {
      routing();
    });

    routing();
  }
}

export default Router;

// 배열일 때 값 찾는 방법?
// 1. filter를 통한 값 찾기
// 2. find를 통한 값 찾기
