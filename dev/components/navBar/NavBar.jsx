import React from 'react';
import { Link } from 'react-router';
import {
  Navbar,
  NavItem,
  Row,
  Col,
  Dropdown,
  Button
} from 'react-materialize';
import { MegaSidenav } from 'react-mega-sidenav';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
      <nav className="navbar">
        <div className="navbar-icon-container">
          <a onClick={this.openSidenav}><i className="material-icons large">more_horiz</i></a>
          <MegaSidenav
            title="Accouma"
            items={[]}
            open={this.state.isOpenSidenav}
            close={this.closeSidenav}
            useClose={true}
            backdrop={true}
            orientation={'left'}
            headStyles={{color: 'black'}}
          >
            <Link
              className="megaSidebar-item"
              to={'/users'}
            >
              <i className="material-icons">group</i> Users
            </Link>
            <Link
              className="megaSidebar-item"
              to={'/accounts'}
            >
              <i className="material-icons">attach_money</i> Accounts
            </Link>
            <Link
              className="megaSidebar-item"
              to={'/reports'}
            >
              <i className="material-icons">event_note</i> Reports
            </Link>
          </MegaSidenav>
        </div>
        <div className="navbar-title-container">
          <Link to={'/'}><h1 className="navbar-title">Accouma</h1></Link>
        </div>
        <div className="navbar-options-container">
          <a><i className="material-icons">add</i></a>
          <Dropdown
            trigger={<p className="navbar-item"><i className="material-icons">face</i></p>}
            className="user_dropdown"
          >
            <Link
              className="navbar-icon"
              to={'/me'}
            >
              <i className="material-icons">perm_identity</i> My Profile
            </Link>
            <Link
              className="navbar-icon"
              to={'/logout'}
            >
              <i className="material-icons">power_settings_new</i> Logout
            </Link>
          </Dropdown>
        </div>
      </nav>
    );
  }
}

export default NavBar;
