import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-action";

import { Title, Input } from "./Filter.styled";
const Filter = ({ value, changeFilter }) => {
  return (
    <>
      <Title>Find contact by name</Title>
      <Input type="text" name="filter" value={value} onChange={changeFilter} />
    </>
  );
};

const mapStateToProps = ({ contacts }) => ({
  value: contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (e) => dispatch(changeFilter(e.target.value.trim())),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  changeFilter: PropTypes.func,
};
