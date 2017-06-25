import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Card,
  Button
} from 'react-materialize';
import { accountsActions } from '../../redux/actions';
import VoidState from '../../common/VoidState';
import InnerLoader from '../../common/InnerLoader';

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = { voidState: false };
  }

  render() {
    return (
      <div className="general-block">
        Reports

        <Button waves='light'>Global Report</Button>
      </div>
    );
  }
}

Reports.propTypes = {};

const allActions = Object.assign({}, accountsActions);

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, allActions)(Reports);
