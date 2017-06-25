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

  saveAccount(data) {
    const token = storage.get('token');
    const { name, description } = data;
    if (token === null) {
      return axios();
    } else {
      const query_sring = Utils.queryString({
        token,
        name,
        description
      });
      return axios({
        method: 'POST',
        url: `${config.API_URL}/accounts/create?${query_sring}`,
        data: {}
      });
    }
  }
}

export default new AccountsServices();
