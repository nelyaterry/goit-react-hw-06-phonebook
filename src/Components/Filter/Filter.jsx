import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-action";

import { Title, Input } from "./Filter.styled";
const Filter = () => {

  const value = useSelector(state => state.contacts.filter);
 const dispatch  = useDispatch();

 const onChange = e => dispatch(changeFilter(e.target.value.trim()));

  return (
    <>
      <Title>Find contact by name</Title>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </>
  );
};


export default Filter