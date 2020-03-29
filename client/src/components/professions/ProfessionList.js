import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import React from "react";
import {
  CardHeader,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import professionStyles from "../../styles/professions_Styles";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(professionStyles);

const ProfessionList = ({ professionsList }) => {
  const classes = styles();
  return (
    <div>
      {professionsList.map(profession => {
        return (
          <Card
            className={classes.root}
            variant="outlined"
            key={profession._key}
          >
            <CardHeader title={profession.name}></CardHeader>
            <CardContent>Basic Description</CardContent>
            <CardActions>
              <Button
                component={Link}
                to={"/profession/" + profession._key}
                variant="outlined"
              >
                Edit
              </Button>
              <Button variant="outlined">Delete</Button>
              <Button variant="outlined">More...</Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

ProfessionList.propTypes = {
  professionsList: PropTypes.array.isRequired
};

export default ProfessionList;
