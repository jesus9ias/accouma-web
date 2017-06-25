import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { MegaSidenav } from 'react-mega-sidenav';
import {
  Row,
  Col,
  Card,
  Table,
  Button,
  Icon,
  Modal
} from 'react-materialize';
import { accountsActions } from '../../../redux/actions';
import VoidState from '../../../common/VoidState';
import InnerLoader from '../../../common/InnerLoader';
import NewRegister from './NewRegister';
import Registers from './Registers';


class AccountRegisters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voidState: false,
      isOpenSidenav: false
    }
    this.openSidenav = this.openSidenav.bind(this);
    this.closeSidenav = this.closeSidenav.bind(this);
  }

  openSidenav() {
    this.setState({isOpenSidenav: true});
  }

  closeSidenav() {
    this.setState({isOpenSidenav: false});
  }

  render() {
    return (
      <div className="general-block">
        <Row>
          <Col s={12}>
            <Card
              className="darken-1 card"
              textClassName="white-text"
              title="Users"
            >
              <span className="card-content">Hi!</span>
            </Card>

            <Button waves='light'>Edit Account</Button>
            <Button waves='light'>Add Members<Icon right>cloud</Icon></Button>
            <Button waves='light' onClick={this.openSidenav}>Add a Register</Button>

            <NewRegister
              isOpenSidenav={this.state.isOpenSidenav}
              closeSidenav={this.closeSidenav}
            />

            <Registers />
          </Col>
        </Row>
      </div>
    );
  }
}

AccountRegisters.propTypes = {};

const allActions = Object.assign({}, accountsActions);

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, allActions)(AccountRegisters);
