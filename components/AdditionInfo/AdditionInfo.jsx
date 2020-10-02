import React, {useState} from "react";
import PersonalData from "./PersonalData";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CallIcon from '@material-ui/icons/Call';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { isEmailCorrect, isNameCorrect, isPhoneCorrect } from "../utils/isCorrect";
import styled from '../styles/AdditionInfo.module.css';

const AdditionInfo = (props) =>
{
    const iconStyle = {
        color: '#00BFA5',
        fontSize: '36px',
        marginTop: '-5px'
    }

    const phoneIcon = <CallIcon style={iconStyle} />
    const emailIcon = <AlternateEmailIcon style={iconStyle} />
    const profileIcon = <AssignmentIndIcon style={iconStyle} />
    const editable = props.edit;

    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const err = !(isEmailCorrect(email)&&isNameCorrect(name)&&isPhoneCorrect(phoneNumber));

    return (
        <div className={ styled.additionInfoWrapper}>
            <div className={editable ? styled.editableWrapper : ''}>
                { editable && <PersonalData
                    icon = {profileIcon}
                    info ={'Укажите ваши фамилию и имя'}
                    edit={editable}
                    setInfo={setName}
                    label={'Фамилия и имя'}
                    check={isNameCorrect}
                    errorMessage={'Вы неправильно ввели имя.'}
                /> }

                <PersonalData
                    icon={emailIcon}
                    setInfo={setEmail}
                    info={props.email ? props.email : 'Укажите e-mail'}
                    edit={editable}
                    label={'E-mail'}
                    check={isEmailCorrect}
                    errorMessage={'Вы неправильно ввели e-mail.'}
                />

                <PersonalData
                    icon={phoneIcon}
                    info={props.phone ? props.phone : 'Укажите номер телефона'}
                    edit={editable}
                    setInfo={setPhoneNumber}
                    label={'Номер телефона'}
                    check={isPhoneCorrect}
                    errorMessage={'Вы неправильно ввели номер.'}
                />

            </div>

            { props.edit &&
                <div className={styled.buttonWrapper}>
                        <button
                            className={styled.saveButton}
                            onClick={()=>{
                                !err&& props.setConfirm(true);
                            }}
                        > Сохранить изменения </button>
                </div>
            }
        </div>
    )
}

export default AdditionInfo;