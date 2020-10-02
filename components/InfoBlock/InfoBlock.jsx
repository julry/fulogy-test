import Photo from "./Photo";
import EditButton from "./EditButton/EditButton";
import styled from '../styles/InfoBlock.module.scss';

const InfoBlock = (props) => {
    return (
            <div className={styled.infoContainer}>
                <div className={styled.userInfo}>
                    <div className={styled.infoAvatar}>
                        <Photo />
                    </div>
                    <p>{props.name}</p>
                </div>
                <EditButton
                    editMode={props.editMode}
                    onClick={props.setEditMode}
                />
            </div>
    )
}

export default InfoBlock;