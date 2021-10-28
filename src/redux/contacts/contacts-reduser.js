import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from "./contacts-action";

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const items = createReducer([], {
  [addContact]: (state, { payload }) => {
    if (
      !state.some(
        (contact) =>
          contact.name.toLowerCase().trim() === payload.name.toLowerCase()
      )
    ) {
      return [...state, payload];
    } else {
      alert(` ${payload.name} is alredy in the contacts list`);
      return state;
    }
  },
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

export default combineReducers({
  items: items,
  filter: filter,
});
