import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FilterLabel } from './Filter.styled';

export class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { onChange, filter } = this.props;
    return (
      <FilterLabel>
        Find contacts by name
        <input onChange={onChange} value={filter} type="text" name="filter" />
      </FilterLabel>
    );
  }
}
