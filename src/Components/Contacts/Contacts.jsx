import PropTypes from "prop-types";

import ButtonText from "../Button/Button";
import {
  ContacstList,
  Contact,
  ContactName,
  ContactPhone,
  MessageNotFound,
} from "./Contacts.styled";

const Contacts = ({ contacts, handleDeleteContact }) => {
  return (
    // <p>helloWorld {contacts[0]}</p>
    contacts.length > 0 ? (
      <ContacstList>
        {contacts.map(({ name, number, id }) => (
          <Contact key={id} id={id}>
            <ContactName>{name}</ContactName>
            <ContactPhone>{number}</ContactPhone>
            <ButtonText type="button" onClick={() => handleDeleteContact(id)}>
              Delete
            </ButtonText>
          </Contact>
        ))}
      </ContacstList>
    ) : (
      <MessageNotFound>Contact not found</MessageNotFound>
    )
  );
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.array,
  handleDeleteContact: PropTypes.func,
};
