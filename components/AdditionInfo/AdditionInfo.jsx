import React from "react";
import classNames from "classnames";
import PersonalData from "../PersonalData/PersonalData";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import CallIcon from "@material-ui/icons/Call";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import {
  isEmailCorrect,
  isNameCorrect,
  isPhoneCorrect,
} from "../../utils/isCorrect";
import styled from "./AdditionInfo.module.scss";

const AdditionInfo = (props) => {
  const iconStyle = {
    color: "#00BFA5",
    fontSize: "36px",
    marginTop: "-5px",
  };

  const confirmData = () => {
    if (!err) props.setConfirm(true);
  };

  const phoneIcon = <CallIcon style={iconStyle} />;
  const emailIcon = <AlternateEmailIcon style={iconStyle} />;
  const profileIcon = <AssignmentIndIcon style={iconStyle} />;

  const emptyPhone = "Укажите номер телефона";
  const emptyEmail = "Укажите e-mail";
  const emptyName = "Укажите ваши фамилию и имя";

  const isEmailExists = !!props.userEmail;
  const isPhoneExists = !!props.userPhone;
  const isNameExists = !!props.userName;

  const err = !(
    isEmailCorrect(props.userEmail) &&
    isNameCorrect(props.userName) &&
    isPhoneCorrect(props.userPhone)
  );

  return (
    <div className={styled.additionInfoWrapper}>
      <div
        className={classNames({
          [`${styled.editableWrapper}`]: props.edit,
        })}
      >
        {props.edit && (
          <PersonalData
            icon={profileIcon}
            info={isNameExists ? props.userName : emptyName}
            edit={props.edit}
            setInfo={props.setName}
            label={"Фамилия и имя"}
            check={isNameCorrect}
            errorMessage={"Вы неправильно ввели имя."}
          />
        )}

        <PersonalData
          icon={emailIcon}
          setInfo={props.setEmail}
          info={isEmailExists ? props.userEmail : emptyEmail}
          edit={props.edit}
          label={"E-mail"}
          check={isEmailCorrect}
          errorMessage={"Вы неправильно ввели e-mail."}
        />

        <PersonalData
          icon={phoneIcon}
          info={isPhoneExists ? props.userPhone : emptyPhone}
          edit={props.edit}
          setInfo={props.setPhone}
          label={"Номер телефона"}
          check={isPhoneCorrect}
          errorMessage={"Вы неправильно ввели номер."}
        />
      </div>

      {props.edit && (
        <div className={styled.buttonWrapper}>
          <button className={styled.saveButton} onClick={confirmData}>
            {" "}
            Сохранить изменения{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default AdditionInfo;
