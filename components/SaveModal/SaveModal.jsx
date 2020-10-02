import React, {useState} from "react";
import CloseIcon from '@material-ui/icons/Close';
import styled from './SaveModal.module.scss';

const SaveModal = (props) => {
    const [isSaved, setIsSaved] = useState (false);
    const data = {
        name: props.name,
        email: props.email,
        phone: props.phone
    }
    const saveData = () => {
        props.save(data);
        setIsSaved(true);
        localStorage.setItem('name', props.name);
        localStorage.setItem('email', props.email);
        localStorage.setItem('phone', props.phone);
    }
    return(
        <div
            className={styled.modalWrapper }
            onClick={()=> isSaved ? props.setConfirm(false) : null}
        >
            <div className={styled.modalWindow + (isSaved ? ' ' + styled.success : '')}>
                <div className={ isSaved ? styled.close: ''}>
                    <CloseIcon
                        style={{
                            color: '#828282',
                            position: 'absolute',
                            top: '24px',
                            right: '24px'
                        }}
                        onClick={() => props.setConfirm(false)}
                    />
                </div>

                <p> {isSaved ? 'Данные успешно сохранены' : 'Сохранить изменения?'}</p>
                {isSaved ?
                    <button
                        className={styled.modalSaveButton}
                        onClick={() => props.setConfirm(false)}
                    >
                        Хорошо
                    </button>
                    :
                    <button
                        className={styled.modalSaveButton}
                        onClick={() => saveData()}
                    >
                        Сохранить
                    </button>
                }
                <button
                    className={styled.modalCancelButton + " " + (isSaved && styled.hidden)}
                    onClick={() => props.setConfirm(false)}
                >
                    Не сохранять
                </button>

            </div>
        </div>
    )
}

export default SaveModal;