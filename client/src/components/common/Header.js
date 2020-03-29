import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";

const Header = () => {
  // const activeStyle = { color : ""};
  return (
    <AppBar position="static" gutterBottom>
      <Toolbar>
        <MenuItem component={NavLink} to="/" exact>
          Home
        </MenuItem>
        <MenuItem component={NavLink} to="/professions">
          Professions
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
