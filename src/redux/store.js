import { createStore, combineReducers } from "redux";
import contactsReducer from "./contacts/contacts-reduser";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
