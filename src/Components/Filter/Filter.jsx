import PropTypes from "prop-types";

import { Title, Input } from "./Filter.styled";
const Filter = ({ value, changeFilter }) => {
  return (
    <>
      <Title>Find contact by name</Title>
      <Input type="text" name="filter" value={value} onChange={changeFilter} />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  changeFilter: PropTypes.func,
};
