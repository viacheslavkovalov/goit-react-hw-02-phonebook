import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import {
  FormWrapper,
  SubmitButton,
  StyledInput,
  StyledLabel,
} from './StyledForm';

class Form extends Component {
  state = {
    name: '',
    number: '',
    disabled: true,
  };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number, disabled } = this.state;
    return (
      <FormWrapper onSubmit={this.handleSubmit}>
        <StyledLabel htmfor={this.nameInputId}>
          Name{' '}
          <StyledInput
            type="text"
            name="name"
            value={name}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </StyledLabel>
        <StyledLabel htmfor={this.numberInputId}>
          Number{' '}
          <StyledInput
            type="tel"
            name="number"
            value={number}
            placeholder="Enter number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </StyledLabel>
        {name && number ? (
          <SubmitButton type="submit" disabled={!disabled}>
            Add contact
          </SubmitButton>
        ) : (
          <SubmitButton type="submit" disabled>
            Add contact
          </SubmitButton>
        )}
      </FormWrapper>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string,
};

export default Form;
