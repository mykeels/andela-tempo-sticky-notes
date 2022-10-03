/** @type {FetchFunction} */
let fetch = null;

/**
 *
 * @param {FetchFunction} fetchFn
 */
export const setFetchFunction = fetchFn => {
  fetch = fetchFn;
  return getFetchFunction();
};

export const getFetchFunction = () => {
  return fetch || ((input, init) => window.fetch(input, init));
};

/**
 * @typedef {(input: RequestInfo, init?: RequestInit) => Promise<Response>} FetchFunction
 */
