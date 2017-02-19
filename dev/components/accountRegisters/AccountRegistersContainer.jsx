import AccountRegisters from './AccountRegisters';
import { connect } from 'react-redux';
import { accountsActions } from '../../redux/actions';

const allActions = Object.assign({}, accountsActions);

function mapStateToProps(state) {
  return {};
}

const AccountRegistersContainer = connect(mapStateToProps, allActions)(AccountRegisters);
AccountRegistersContainer.displayName = 'accounts';
export default AccountRegistersContainer;
