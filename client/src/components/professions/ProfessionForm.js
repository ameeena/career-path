import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
// import SelectInput from "../common/SelectInput";

const ProfessionForm = ({
  profession,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{profession._key ? "Edit" : "Add"} Profession</h2>
      {errors.onSave && <div role="alert">{errors.onSave}</div>}
      <TextInput
        name="name"
        label="Name"
        value={profession.name}
        onChange={onChange}
        error={errors.name}
      />

      {/* <SelectInput
        name="authorId"
        label="Author"
        value={profession.authorId || ""}
        defaultOption="Select Author"
        options={authors.map(author => ({
          value: author.id,
          text: author.name
        }))}
        onChange={onChange}
        error={errors.author}
      /> */}

      {/* <TextInput
        name="category"
        label="Category"
        value={profession.category}
        onChange={onChange}
        error={errors.category}
      /> */}

      <button type="submit" disabled={saving}>
        {saving ? "Saving..." : "Save"}
      </button>
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
