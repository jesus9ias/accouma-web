import React from 'react';
import { Link } from 'react-router';
import {
  Row,
  Col,
  Card,
  Button
} from 'react-materialize';
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

export default Reports;
