import React from 'react'
import classes from './Input.module.css'
import { InputProps } from '../Interface.module'

const InputValue:React.FC<InputProps>= (props:InputProps) => {
    const blur = props.typeopacity ? 100 : 1
    const [hiden,setHinden] = React.useState(false)
    
    return (
        <>{props.type == 'range' ?
            <div className={classes.input}>
                <span className={classes.show} style={{ left: `${props.max == 50 ? (+props.values + 50) * 0.94 :Number(props.values) * 0.94}%`,display:`${hiden?'block':'none'}` }} >
                    {props.max == 50 ? +props.values + 50 : (+props.values/blur)}</span>
                <div className={classes.process} style={{ width: `${props.max == 50 ? (+props.values + 50) : props.values}%` }}></div>
                <input value={props.values.toString()} className={classes.slider} {...props} onMouseEnter ={()=>setHinden(true)} onMouseLeave = {()=>setHinden(false)} />
            </div>
            :
            <input className={props.type == 'checkbox' ? classes.checkbox : classes.color} defaultValue={props.values.toString()} {...props} />}</>
    )
}

export default InputValue