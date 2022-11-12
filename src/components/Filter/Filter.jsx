import PropTypes from 'prop-types';
import { FilterLabel } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <input onChange={onChange} value={filter} type="text" name="filter" />
    </FilterLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
