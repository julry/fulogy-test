import React, {useState} from "react";
import {TextField} from "@material-ui/core";
import styled from './PersonalData.module.scss'

const PersonalData = (props) => {
    const [enterError, setEnterError] = useState(false);
    return(
            <div className={styled.dataWrapper + (props.edit ? " " + styled.editWrapper : '')}>
               <div className={styled.iconWrapper}>
                   {props.icon}
               </div>
                {props.edit ?
                    enterError ?
                        <TextField
                            error
                            id={"outlined-error-helper-text" + props.info}
                            label={props.label}
                            helperText={props.errorMessage}
                            variant="outlined"
                            onBlur={(e)=>setEnterError(!props.check(e.target.value))}
                            onChange={(e)=>props.setInfo(e.target.value)}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            style={{

                                height: '75%',
                            }}
                        />
                        :<TextField
                            id={"outlined-required" + props.info}
                            label={props.label}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e)=>props.setInfo(e.target.value)}
                            onBlur={(e)=>setEnterError(!props.check(e.target.value))}
                            InputProps={{
                                placeholder: props.info
                            }}
                        />

                    : props.info
                }
            </div>
    )
}
export default PersonalData;



