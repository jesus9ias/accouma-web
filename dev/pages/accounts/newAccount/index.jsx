import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import {
  Row,
  Col,
  Card
} from 'react-materialize';
import { accountsActions } from '../../redux/actions';


import Backdrop from '../../common/Backdrop';

class NewAccount extends React.Component {

  constructor(props) {
    super(props);
    this.createAccount = this.createAccount.bind(this);
    this.createAccountAndStay = this.createAccountAndStay.bind(this);
  }

  clearForm() {
    this.refs.newName.value = '';
    this.refs.newDescription.value = '';
    this.refs.newLastNames.value = '';
    this.refs.newEmail.value = '';
  }

  makeAccountData() {
    let accountData = {
      name: this.refs.newName.value,
      description: this.refs.newDescription.value
    }
    return accountData;
  }

  createAccount() {
    this.props.saveAccount(this.makeAccountData());
    browserHistory.push('/accounts');
  }

  createAccountAndStay() {
    this.props.saveAccount(this.makeAccountData());
    this.clearForm();
  }

  render() {
    return (
      <section className="section-overlay user-new">
        <Backdrop />
        <div className="section-overlay-content">
          <div className="section-overlay-head">
            <h2 className="section-overlay-title">New account</h2>
            <Link className="section-overlay-close" to={'/accounts'}>
              <i className="material-icons medium">close</i>
            </Link>
          </div>
          <div className="section-overlay-body ">
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="newName"
                  ref="newName"
                  type="text"
                  className="validate login-field"
                />
              <label htmlFor="newName">Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="newDescription"
                  ref="newDescription"
                  type="text"
                  className="validate login-field"
                />
              <label htmlFor="newDescription">Description</label>
              </div>
            </div>
          </div>
          <div className="section-overlay-footer">
            <div className="row">
              <div className="col s12">
                <button
                  type="button"
                  className="waves-effect waves-light btn"
                  onClick={this.createAccount}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="waves-effect waves-light btn"
                  onClick={this.createAccountAndStay}
                >
                  Save and create new
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

NewAccount.propTypes = {
  saveAccount: React.PropTypes.func.isRequired
};

const allActions = Object.assign({}, accountsActions);

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, allActions)(NewAccount); ;
