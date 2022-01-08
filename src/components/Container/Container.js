import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  border: 3px solid rgb(57, 133, 168);
  border-radius: 6px;
  margin: 30px auto;
  padding: 30px;
  max-width: 350px;
  min-height: 320px;
  background-color: rgba(199, 199, 199, 0.248);
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
