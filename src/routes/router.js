import { routes } from './path';

class Router {
  constructor($container) {
    this.$container = $container;
    let currentPage;

    const findMatchedPath = (currentPath) => {
      const findData = routes.find((route) => {
        return route.path === currentPath;
      });

      return findData?.page;
    };

    const routing = () => {
      currentPage = null;
      const TargetPage = findMatchedPath(location.pathname) || '404';
      currentPage = new TargetPage($container);
    };

    // popstate : 브라우저 뒤로가기/앞으로가기 버튼 누를 때 체크
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
