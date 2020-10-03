import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import styled from "./EditButton.module.scss";

const EditButton = (props) => {
  return (
    <div className={styled.wrapper} onClick={props.onClick}>
      {props.editMode ? (
        <>
          <p>ЗАКРЫТЬ</p>
          <CloseIcon />
        </>
      ) : (
        <>
          <p>РЕДАКТИРОВАТЬ</p>
          <EditIcon />
        </>
      )}
    </div>
  );
};

export default EditButton;
