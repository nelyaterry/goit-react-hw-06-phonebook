import { v4 as uuidv4 } from "uuid";
// import { ADD, DELETE, FILTER } from "./contacts-types";
import { createAction } from "@reduxjs/toolkit";

// export const addContact = (name, number) => ({
//   type: ADD,
//   payload: {
//     name,
//     number,
//     id: uuidv4(),
//   },
// });

// export const deleteContact = (id) => ({
//   type: DELETE,
//   payload: id,
// });

// export const changeFilter = (value) => ({
//   type: FILTER,
//   payload: value,
// });

export const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    name,
    number,
    id: uuidv4(),
  },
}));

export const deleteContact = createAction("contacts/delete");

export const changeFilter = createAction("contacts/changeFilter");
