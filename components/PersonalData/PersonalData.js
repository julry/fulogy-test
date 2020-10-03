import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import styled from "./PersonalData.module.scss";
import classNames from "classnames";

const PersonalData = (props) => {
  const [enterError, setEnterError] = useState(false);
  const dataContainer = classNames([`${styled.dataWrapper}`], {
    [`${styled.editWrapper}`]: props.edit,
  });
  return (
    <div className={dataContainer}>
      <div className={styled.iconWrapper}>{props.icon}</div>
      {props.edit ? (
        <TextField
          error={enterError}
          label={props.label}
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => props.setInfo(e.target.value)}
          onBlur={(e) => setEnterError(!props.check(e.target.value))}
          inputProps={{
            placeholder: props.info,
          }}
          style={enterError ? { height: "75%" } : {}}
        />
      ) : (
        props.info
      )}
    </div>
  );
};
export default PersonalData;
