import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import React from "react";


const EditButton = (props) => {
   return(
       <>
           <div className={'wrapper'} onClick={props.onClick}>
               {props.editMode ?
                    <>
                       <p>ЗАКРЫТЬ</p>
                       <CloseIcon />
                    </>
               :
                    <>
                       <p>РЕДАКТИРОВАТЬ</p>
                        <EditIcon />
                    </>
                }
           </div>
        <style jsx>{
            `
              .wrapper{
                  display: flex;
                  align-items: center;
              }
              
              .wrapper p{
                font-size: 14px;
                margin-right: 5px;
              }
            `
        }
        </style>
    </>)
}

export default EditButton;