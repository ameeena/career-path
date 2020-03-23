import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import ProfessionForm from "./ProfessionForm";
import * as professionActions from "../../actions/professionActions";
import Spinner from "../common/Spinner";

// Empty profession at the beginning
// TODO: Add a model for profession
const newProfession = {
  name: ""
};

// Container Component
const ManageProfessionPage = ({ professionsList, history, ...props }) => {
  const [profession, setProfession] = useState({ ...props.profession });
  const [errors, setErrors] = useState({});
  const [saving, setSave] = useState(false);

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

  function formIsValid () {
    const { name } = professionsList;
    const errors = {};

    if(!name) 
      errors.name = "Name is required!!";
    setErrors(errors);

    return Object.keys(errors).length === 0;
  }
  // Handle submit button
  function handleSave(event) {
    if(!formIsValid) return;
    setSave(true);
    event.preventDefault();
    props.bindActions
      .saveProfession(profession)
      .then(() => {
        history.push("/professions");
      })
      .catch(err => {
        setSave(false);
        setErrors({ onSave: err.message });
      });
  }

  // Load the edit form
  return professionsList.length === 0 ? (
    <Spinner />
  ) : (
    <ProfessionForm
      profession={profession}
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
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
  return professionsList.find(elem => elem._key === key) || null;
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
