import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";
import React from "react";

const ProfessionList = ({ professionsList }) => (
  <div>
    <h2> Professions List</h2>
    {professionsList.map(profession => {
      return (
        <Card key={profession._key}>
          <Link to={"/profession/" + profession._key}>{profession.name}</Link>
        </Card>
      );
    })}
  </div>
);

ProfessionList.propTypes = {
  professionsList: PropTypes.array.isRequired
};

export default ProfessionList;
