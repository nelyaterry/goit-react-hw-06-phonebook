import { combineReducers } from "redux";
import { ADD, DELETE, FILTER } from "./contacts-types";

const localStorageContact = JSON.parse(window.localStorage.getItem("contacts"));

const items = (
  state = localStorageContact ? localStorageContact : [],
  { type, payload }
) => {
  let newState = [];
  console.log(state);

  switch (type) {
    case ADD:
      if (
        !state.some(
          (contact) =>
            contact.name.toLowerCase().trim() === payload.name.toLowerCase()
        )
      ) {
        newState = [...state, payload];
        window.localStorage.setItem("contacts", JSON.stringify(newState));
      } else {
        alert(` ${payload.name} is alredy in the contacts list`);
        newState = state;
      }

      //   newState = [...state, payload];
      //   window.localStorage.setItem("contacts", JSON.stringify(newState));
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
