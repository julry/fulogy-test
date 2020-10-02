import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Photo from '../Photo'
import React from "react";
import styled from './Header.module.scss'

const Header = ( props ) => {
    const surname = props.name.split(' ')[0];
    const name = props.name.split(' ')[1]
    return (
        <div className={styled.headerWrapper}>
            <NotificationsNoneIcon />
            <div className={styled.vl}/>
            <div className={styled.navAvatar}>
                    <Photo />
            </div>
            <p>{surname} {name[0]}.</p>
        </div>
    )
}


export default Header;