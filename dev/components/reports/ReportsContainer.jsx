import Reports from './Reports';
import { connect } from 'react-redux';
import { accountsActions } from '../../redux/actions';

const allActions = Object.assign({}, accountsActions);

function mapStateToProps(state) {
  return {};
}

const ReportsContainer = connect(mapStateToProps, allActions)(Reports);
ReportsContainer.displayName = 'accounts';
export default ReportsContainer;
