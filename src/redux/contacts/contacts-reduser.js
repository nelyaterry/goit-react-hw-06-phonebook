import { combineReducers } from "redux";
import { ADD, DELETE, FILTER } from "./contacts-types";

const localStorageContact = JSON.parse(window.localStorage.getItem("contacts"));

const items = (
  state = localStorageContact ? localStorageContact : [],
  { type, payload }
) => {
  let newState = [];
  switch (type) {
    case ADD:
      newState = [...state, payload];
      window.localStorage.setItem("contacts", JSON.stringify(newState));
      return newState;

    case DELETE:
      newState = state.filter((contact) => contact.id !== payload);
      window.localStorage.setItem("contacts", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: items,
  filter: filter,
});
