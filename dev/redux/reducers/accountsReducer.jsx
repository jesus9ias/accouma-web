import { Map, fromJS } from 'immutable';
import * as actions from '../allTypes';
import * as IS from '../INITIAL_STATE';

const initialState = Map({
  accounts: IS.accounts,
  loading: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOADING_ACCOUNTS:
      return state.update('loading', value => action.loading);
    case actions.GET_ALL_ACCOUNTS:
      return state.update('accounts', value => action.accounts);
    default:
      return state;
  }
}
