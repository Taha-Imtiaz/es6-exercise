import { TextField } from "@material-ui/core";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

import "./Input.css";

const styles = {
  labelRoot: {
    fontSize: 16,
  },
};

const Input = ({ classes, handleSearch,searchText }) => {
  
  return (
    <div className="searchInput">
      <TextField
       style={{fontSize:"1.6rem !important"}}
        InputLabelProps={{
          classes: {
            root: classes.labelRoot,
          },
        }}
        label="Search"
        type="text"
        name="searchText"
        variant="outlined"
        value={searchText}
        onChange={ handleSearch}
      />
    </div>
  );
};

export default withStyles(styles)(Input);
