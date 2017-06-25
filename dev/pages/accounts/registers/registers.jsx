import React from 'react';
import {
  Table
} from 'react-materialize';

class Registers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th data-field="concept">Concept</th>
            <th data-field="in">In</th>
            <th data-field="out">Out</th>
            <th data-field="type">Type</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Today food</td>
            <td>$0.00</td>
            <td>$120.40</td>
            <td>Normal</td>
          </tr>
          <tr>
            <td>Today food</td>
            <td>$0.00</td>
            <td>$120.40</td>
            <td>Normal</td>
          </tr>
          <tr>
            <td>Today food</td>
            <td>$0.00</td>
            <td>$120.40</td>
            <td>Normal</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

Registers.propTypes = {};

export default Registers;
