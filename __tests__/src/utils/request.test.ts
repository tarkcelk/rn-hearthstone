import {request} from '../../../src/utils/request';

describe('axios network test', () => {
  it('should not fail', () => {
    request({url: '', method: 'GET'}).then(result => {
      expect(result.data).toBeDefined();
    });
  });
});
