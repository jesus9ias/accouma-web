import React from 'react';
import { Link } from 'react-router';
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
import VoidState from '../../common/VoidState';
import InnerLoader from '../../common/InnerLoader';


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

              <MegaSidenav
                title="Add Register"
                items={[]}
                open={this.state.isOpenSidenav}
                close={this.closeSidenav}
                useClose={true}
                backdrop={true}
                orientation={'bottom'}
                headStyles={{color: 'black'}}
              >
              sadfas
              </MegaSidenav>

            <Table>
              <thead>
                <tr>
                  <th data-field="id">Name</th>
                  <th data-field="name">Item Name</th>
                  <th data-field="price">Item Price</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

AccountRegisters.propTypes = {};

export default AccountRegisters;
