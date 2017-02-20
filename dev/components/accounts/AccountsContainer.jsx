import Accounts from './Accounts';
import { connect } from 'react-redux';
import { accountsActions } from '../../redux/actions';

const allActions = Object.assign({}, accountsActions);

function mapStateToProps(state) {
  const accounts = state.accounts.get('accounts') || [];
  const voidState = (accounts.length == 0 && state.accounts.loading == false)? true : false;

  return {
    accounts,
    voidState
  };
}

const AccountsContainer = connect(mapStateToProps, allActions)(Accounts);
AccountsContainer.displayName = 'accounts';
export default AccountsContainer;
