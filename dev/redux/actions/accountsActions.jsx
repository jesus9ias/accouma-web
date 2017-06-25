import * as actions from '../allTypes';
import AccountsServices from '../../services/AccountsServices';

export default {
  getAllAccounts: () => (dispatch) => {
    dispatch({ type: actions.LOADING, data: true });
    AccountsServices.getAccounts().then((response) => {
      dispatch({ type: actions.GET_ALL_ACCOUNTS, accounts: response.data.result.rows });
      dispatch({ type: actions.LOADING, data: false });
    }).catch((error) => {

    });
  },

  saveAccount: (data) => (dispatch) => {
    dispatch({ type: actions.LOADING, data: true });
    AccountsServices.saveAccount(data).then((response) => {
      dispatch({ type: actions.ADD_ONE_ACCOUNT, data });
      dispatch({ type: actions.LOADING, data: false });
    }).catch((error) => {

    });
  }
};
