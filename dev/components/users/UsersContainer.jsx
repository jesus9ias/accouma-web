import Users from './Users';
import { connect } from 'react-redux';
import { usersActions } from '../../redux/actions';

const allActions = Object.assign({}, usersActions);

function mapStateToProps(state) {

  const users = state.users.get('users') || [];
  const voidState = (users.length == 0 && state.users.loading == false)? true : false;

  return {
    users,
    voidState
  };
}

const UsersContainer = connect(mapStateToProps, allActions)(Users);
UsersContainer.displayName = 'users';
export default UsersContainer;
