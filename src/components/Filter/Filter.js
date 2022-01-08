import PropTypes from 'prop-types';
import { StyledLabel, StyledInput } from './StyledFilter';

const Filter = ({ value, onChange }) => (
  <StyledLabel>
    Find contacts by name
    <StyledInput type="text" value={value} onChange={onChange}></StyledInput>
  </StyledLabel>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Filter;
