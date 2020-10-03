import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import styled from "./SaveModal.module.scss";
import classNames from "classnames";

const SaveModal = (props) => {
  const [isSaved, setIsSaved] = useState(false);
  const data = {
    name: props.name,
    email: props.email,
    phone: props.phone,
  };
  const saveData = () => {
    props.save(data).then(() => {
      setIsSaved(true);
      localStorage.setItem("name", props.name);
      localStorage.setItem("email", props.email);
      localStorage.setItem("phone", props.phone);
    });
  };

  const closeStyle = {
    color: "#828282",
    position: "absolute",
    top: "24px",
    right: "24px",
  };

  const closeModal = () => {
    props.setConfirm(false);
  };

  const closeModalAfterSave = () => {
    if (isSaved) props.setConfirm(false);
  };

  const modalWindow = classNames([`${styled.modalWindow}`], {
    [`${styled.success}`]: isSaved,
  });

  const cancel = classNames([`${styled.modalCancelButton}`], {
    [`${styled.hidden}`]: isSaved,
  });

  const closed = classNames([`${styled.close}`], {
    [`${styled.closeHidden}`]: isSaved,
  });

  return (
    <div className={styled.modalWrapper} onClick={closeModalAfterSave}>
      <div className={modalWindow}>
        <div className={closed}>
          <CloseIcon style={closeStyle} onClick={closeModal} />
        </div>

        <p> {isSaved ? "Данные успешно сохранены" : "Сохранить изменения?"}</p>
        {isSaved ? (
          <button className={styled.modalSaveButton} onClick={closeModal}>
            Хорошо
          </button>
        ) : (
          <button className={styled.modalSaveButton} onClick={saveData}>
            Сохранить
          </button>
        )}
        <button className={cancel} onClick={closeModal}>
          Не сохранять
        </button>
      </div>
    </div>
  );
};

export default SaveModal;
