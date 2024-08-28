import { http, HttpResponse } from 'msw';

import {
  decreaseCounterEndPoint,
  getCounterEndPoint,
  increaseCounterEndPoint,
} from '../data-source/default.count.data.source';

export const COUNT_FEATURE_MOCK_HANDLER = [
  http.get(getCounterEndPoint, () => {
    const count = localStorage.getItem('count');
    let ret = count ?? '0';

    if (count === undefined || count === null) {
      localStorage.setItem('count', ret);
    }

    return HttpResponse.text(ret);
  }),
  http.patch(increaseCounterEndPoint, () => {
    const count = localStorage.getItem('count');
    let ret;
    if (count === undefined || count === null) {
      ret = '1';
    } else {
      ret = (parseInt(count) + 1).toString();
    }
    localStorage.setItem('count', ret);
    return HttpResponse.text(ret);
  }),
  http.patch(decreaseCounterEndPoint, () => {
    const count = localStorage.getItem('count');
    let ret;
    if (count === undefined || count === null) {
      ret = '-1';
    } else {
      ret = (parseInt(count) - 1).toString();
    }
    localStorage.setItem('count', ret);
    return HttpResponse.text(ret);
  }),
];
