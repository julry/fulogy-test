import React, {useState} from "react";
import CloseIcon from '@material-ui/icons/Close';

const SaveModal = (props) => {
    const [isSaved, setIsSaved] = useState (false);
    const saveData = () => {
        //запрос
        setIsSaved(true);
    }
    return(
        <>
            <div className={'modal-wrapper'}>
                <div className={'modal-window'}>
                    <CloseIcon
                         style={{
                             color: '#828282',
                             position: 'absolute',
                             top: '24px',
                             right: '24px'
                         }}
                         onClick={() => props.setConfirm(false)}
                    />
                    <p> {isSaved ? 'Данные успешно сохранены' : 'Сохранить изменения?'}</p>
                    {isSaved ?
                        <button
                            className={'modal-save-button'}
                            onClick={() => props.setConfirm(false)}
                        >
                            Хорошо
                        </button>
                        :
                        <button
                            className={'modal-save-button'}
                            onClick={() => saveData()}
                        >
                            Сохранить
                        </button>
                    }
                    <button
                        className={'modal-not-save-button ' + (isSaved && 'hidden')}
                        onClick={() => props.setConfirm(false)}
                    >
                        Не сохранять
                    </button>

                </div>
            </div>

            <style jsx>{`
                    .modal-wrapper {
                      position: fixed;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      background: rgba(44, 44, 44, 0.5);
                      z-index:100;
                    }
                    .modal-window{
                      position: absolute;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      background-color: white;
                      top: 50%;
                      lefT: 50%;
                      border-radius: 10px;
                      padding: 69px 108px 56px;
                      margin-right: -50%;
                      transform: translate(-50%, -50%) 
                    }
                  
                    .modal-wrapper p{ 
                      font-weight: 600;
                      font-size: 24px;
                      color: rgba(49, 49, 49, 0.7);
                    }
                    .modal-wrapper button{ 
                        border-radius: 41px;
                        font-size: 14px;
                        padding: 15px 0;
                        font-family: Open Sans,serif;
                        outline: none;
                        margin: 28px 28px 0;
                        
                    }
                    .modal-save-button{
                      background: #01BDA7;
                      border: none;
                      color: white;
                    }
                    .modal-not-save-button{
                      border: 1px solid #00BFA5;
                      color: #00BFA5;
                      background-color: white;
                    }
                    .hidden{
                      display: none;
                    }
                `}
            </style>
        </>
    )
}

export default SaveModal;