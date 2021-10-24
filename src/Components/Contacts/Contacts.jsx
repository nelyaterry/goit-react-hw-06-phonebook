import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-action";

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

const getFilteredContacts = (contacts, filter) => {
  const filterNormalized = filter.toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterNormalized)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  handleDeleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

Contacts.propTypes = {
  contacts: PropTypes.array,
  handleDeleteContact: PropTypes.func,
};
