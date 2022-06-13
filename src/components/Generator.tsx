import React, { useContext } from 'react'
import { AppContext } from '../context/AppProvider'
import InputValue from '../ui/InputComponent'
import classes from './Generator.module.css'

const  Gennerator:React.FC = ()=> {
    const { state,dispatch} = useContext(AppContext)
    return (
        <div className={classes.containt}>
            <h1>Box-Shadow CSS Gennerator</h1>
            <div className="row">
                <p>
                    shift right
                </p>
                <InputValue type="range" values={state.css?.right} onChange={(e) => dispatch({ type: 'change', payload:{ right: e.target.value }})}
                 min={-50} max={50} step={1} />
            </div>
            <div className="row">
                <p>
                    shift down
                </p>
                <InputValue type="range" values={state?.css?.down} onChange={(e) => dispatch(
                    {  type: 'change', payload:{down: e.target.value }}
                )} min={-50} max={50} step={1} />
            </div>
            <div className="row">
                <p>
                    Spread
                </p>
                <InputValue type="range" values={state.css?.spread} onChange={(e) => dispatch(
                    { type: 'change', payload: {spread:e.target.value }}
                )} min={0} max={100} step={1} />
            </div>
            <div className="row">
                <p>
                    Blur
                </p>
                <InputValue type="range" values={state.css?.blur} onChange={(e) => dispatch(
                    { type: 'change', payload: {blur: e.target.value }}
                )} min={0} max={100} step={1} />
            </div>
            <div className="row">
                <p>
                    Opacity
                </p>
                <InputValue type="range"  typeopacity={1} values={state.css?.opacity} onChange={(e) => dispatch(
                    { type: 'change', payload: {opacity: (e.target.value)}}
                )} min={0} max={100} step={10} />
            </div>
            <div className="row insert">
                <InputValue type="checkbox" checked = {state.css?.inset} values={state.css?.inset} onChange={(e) => dispatch(
                    { type: 'change', payload: {inset: e.target.checked}}
                )}/>
                <p>
                    insert
                </p>
            </div>
            <div className="row">
                <InputValue type="color" values={state.css?.color} onChange={(e) => dispatch(
                    { type: 'change', payload: {color: (e.target.value)}}
                )}/>

            </div>

        </div>
    )
}
export default Gennerator