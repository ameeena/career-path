import React from "react";
import PropTypes from "prop-types";
import { Typography, TextField, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const ProfessionForm = ({
  profession,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <Typography variant="h2" align="center">
        {profession._key ? "Edit" : "Add"} Profession{" "}
      </Typography>

      {errors.onSave && (
        <Alert severity="error" role="alert">
          {errors.onSave}
        </Alert>
      )}

      <div>
        <TextField
          error={errors.name}
          name="name"
          label="Name"
          variant="outlined"
          required
          value={profession.name}
          onChange={onChange}
        />
      </div>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={saving}
      >
        {saving ? "Saving..." : "Save"}
      </Button>
    </form>
  );
};

ProfessionForm.propTypes = {
  profession: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default ProfessionForm;
