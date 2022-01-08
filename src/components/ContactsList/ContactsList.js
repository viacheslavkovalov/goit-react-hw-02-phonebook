import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContact,
  StyledContactItem,
  StyledContactButton,
} from './StyledContactsList';

const ContactsList = ({ contacts, onDeleteContact }) =>
  contacts.length > 0 && (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <StyledContact key={id}>
          <StyledContactItem>
            {name}: {number}
          </StyledContactItem>
          <StyledContactButton
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </StyledContactButton>
        </StyledContact>
      ))}
    </ul>
  );

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactsList;
