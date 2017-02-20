import axios from 'axios';
import storage from 'key-storage';
import config from '../config';
import Utils from '../utils/Utils';

class AccountsServices {
  getAccounts() {
    const token = storage.get('token');
    if (token === null) {
      return axios();
    } else {
      const query_sring = Utils.queryString({
        token: token
      });
      return axios({
        method: 'GET',
        url: `${config.API_URL}/accounts?${query_sring}`,
        data: {}
      });
    }
  }
}

export default new AccountsServices();
