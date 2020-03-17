import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import ProfessionForm from "./ProfessionForm";
import * as professionActions from "../../actions/professionActions";

// Empty profession at the beginning
// TODO: Add a model for profession
const newProfession = {
  name: ""
};

// Container Component
const ManageProfessionPage = ({ professionsList, history, ...props }) => {
  const [profession, setProfession] = useState({ ...props.profession });
  const [errors, setErrors] = useState({});
  // This is used as component did mount and renders every time props are changed
  useEffect(() => {
    if (professionsList.length === 0) {
      props.bindActions.getProfessions();
    } else {
      setProfession({ ...props.profession });
    }
  }, [props.profession]);

  // Change in input value
  function handleChange(event) {
    const { name, value } = event.target;
    setProfession(prevProfession => ({
      ...prevProfession,
      [name]: value
    }));
  }

  // Handle submit button
  function handleSave(event) {
    event.preventDefault();
    props.bindActions.saveProfession(profession).then(() => {
      history.push("/professions");
    });
  }

  // Load the edit form
  return (
    <ProfessionForm
      profession={profession}
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
};

// bindActions, Binds dispatch from all the methods with dispatch
ManageProfessionPage.propTypes = {
  profession: PropTypes.object.isRequired,
  professionsList: PropTypes.array.isRequired,
  bindActions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

// In case updation is required, load the current profession chosen
function getProfessionByKey(professionsList, key) {
  return professionsList.find(elem => elem._key == key) || null;
}

//
function mapStateToProps(state, ownProps) {
  const key = ownProps.match.params._key;
  const profession =
    key && state.professionsList.length > 0
      ? getProfessionByKey(state.professionsList, key)
      : newProfession;

  return {
    professionsList: state.professionsList,
    profession
  };
}

// const mapDispatchToProps = {
//     getProfessions : professionActions.getProfessions,
//     saveProfession : professionActions.saveProfession
// }

// Map all the methods from the professionActions ActionCreator
function mapDispatchToProps(dispatch) {
  return {
    bindActions: bindActionCreators(professionActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageProfessionPage);
