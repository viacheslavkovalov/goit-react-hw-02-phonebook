import PropTypes from 'prop-types';
import { Container, Title } from './StyledSection';

function Section({ children, title }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
