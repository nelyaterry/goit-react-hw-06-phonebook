// import React, { useState, useEffect } from "react";

import { Phonebook, Title, SubTitle, ContactBox } from "./App.styled";
import ContactForm from "../ContactForm/ContactForm";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";

const App = () => {
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
