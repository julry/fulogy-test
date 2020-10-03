import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import styled from "./PersonalData.module.scss";

const PersonalData = (props) => {
  const [enterError, setEnterError] = useState(false);
  return (
    <div
      className={
        styled.dataWrapper + (props.edit ? " " + styled.editWrapper : "")
      }
    >
      <div className={styled.iconWrapper}>{props.icon}</div>
      {props.edit ? (
        <TextField
          error={enterError}
          id={"outlined-required" + props.info}
          label={props.label}
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => props.setInfo(e.target.value)}
          onBlur={(e) => {
            console.log(e.target.value);
            setEnterError(!props.check(e.target.value));
          }}
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
