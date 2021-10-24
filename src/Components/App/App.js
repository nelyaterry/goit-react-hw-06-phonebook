// import React, { useState, useEffect } from "react";

import { Phonebook, Title, SubTitle, ContactBox } from "./App.styled";
import ContactForm from "../ContactForm/ContactForm";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";

const App = () => {
  // const [contacts, setContacts] = useState(
  //   () =>
  //     JSON.parse(window.localStorage.getItem("contacts")) ?? [
  //       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //     ]
  // );
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   window.localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const formSubmitHandler = (data) => {
  //   !contacts.some(
  //     (contact) => contact.name.toLowerCase().trim() === data.name.toLowerCase()
  //   )
  //     ? setContacts((prevState) => [...prevState, data])
  //     : alert(` ${data.name} is alredy in the contacts list`);
  // };

  // const handleDeleteContact = (id) => {
  //   setContacts((prevState) =>
  //     prevState.filter((contact) => contact.id !== id)
  //   );
  // };

  // const changeFilter = (e) => {
  //   setFilter(e.target.value.trim());
  // };

  // const getFilteredContacts = () => {
  //   const filterNormalized = filter.toLowerCase();

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filterNormalized)
  //   );
  // };

  return (
    <>
      <Title>Phonebook</Title>
      <Phonebook>
        <ContactForm />
        <ContactBox>
          <SubTitle>Contacts</SubTitle>
          <Filter />
          <Contacts />
        </ContactBox>
      </Phonebook>
    </>
  );
};

export default App;
