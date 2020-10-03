import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Photo from "../Photo/Photo";
import React from "react";
import styled from "./Header.module.scss";

const Header = (props) => {
  const [surname, name] = props.name.split(" ");

  return (
    <div className={styled.headerWrapper}>
      <NotificationsNoneIcon />
      <div className={styled.verticalLine} />
      <div className={styled.navAvatar}>
        <Photo />
      </div>
      <p>
        {surname} {name[0]}.
      </p>
    </div>
  );
};

export default Header;
