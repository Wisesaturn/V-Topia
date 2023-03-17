// querySelector 함수 설정
// result값이 HTMLElement에 포함되어 있지 않으면 null 반환

export const $ = (selector) => {
  const result = document.querySelector(selector);
  if (!(result instanceof HTMLElement)) return null;

  return result;
}
