import React from 'react';
import { MegaSidenav } from 'react-mega-sidenav';

class NewRegister extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MegaSidenav
        title="Add Register"
        items={[]}
        open={this.props.isOpenSidenav}
        close={this.props.closeSidenav}
        useClose={true}
        backdrop={true}
        orientation={'bottom'}
        headStyles={{color: 'black'}}
      >
      sadfas
      </MegaSidenav>
    );
  }
}

NewRegister.propTypes = {
  closeSidenav: React.PropTypes.func.isRequired,
  isOpenSidenav: React.PropTypes.bool.isRequired
};

export default NewRegister;
