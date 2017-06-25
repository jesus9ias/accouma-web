import NewAccount from './NewAccount';
import { connect } from 'react-redux';
import { accountsActions } from '../../redux/actions';

const allActions = Object.assign({}, accountsActions);

function mapStateToProps(state) {
  return {};
}

const NewAccountContainer = connect(mapStateToProps, allActions)(NewAccount);
NewAccountContainer.displayName = 'newAccount';
export default NewAccountContainer;
