import React from 'react';
import { Link } from 'react-router';
import {
  Row,
  Col,
  Card
} from 'react-materialize';
import VoidState from '../../common/VoidState';
import InnerLoader from '../../common/InnerLoader';

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = { voidState: false };
  }

  componentWillMount() {
  }



  render() {
    return (
      <div className="general-block">
        Reports
      </div>
    );
  }
}

Reports.propTypes = {};

export default Reports;
