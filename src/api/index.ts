import {$Urls} from '../constants';
import {request} from '../utils/request';

export const cardAPI = {
  getAll: () => request({url: $Urls.list, method: 'GET'}),
};
