import React, { useContext } from 'react'
import { AppContext } from '../context/AppProvider'
const  Template:React.FC =() => {
    const { dispatch } = useContext(AppContext)
    return (
        <div style={{display:'flex',height:'50px', width:'300px',marginTop:'100px',justifyContent:'space-between',alignContent:'center',marginLeft:'20px'}}>
            <div onClick={() => dispatch({ type: 'changeLayer', payload: 1 })} className='shape' style={{ width: '50px', height: '50px', background: 'rgba(40,159,237,1)' }}>
                <div style={{
                    width: '50px', height: '50px', boxShadow: `rgb(40, 159, 237) 5px 5px 0px 0px,rgb(95, 184, 255) 10px 10px 0px 0px,#a1d8ff 15px 15px 0px 0px,#cae6ff 20px 20px 0px 0px,#e1eeff 25px 25px 0px 0px`}}></div>
            </div>
            <div onClick={() => dispatch({ type: 'changeLayer', payload: 2 })} className='shape' style={{ width: '50px', height: '50px', background: 'rgba(40,159,237,1)'}}>
                <div style={{
                    width: '50px', height: '50px', boxShadow: `#daabab -1px 0px 4px 0px,rgba(255,255,0,1) -2px 0px 10px 0px,rgba(255,128,0,1)-10px 0px 20px 0px,rgba(255,0,0,1) -18px 0px 40px 0px` }} ></div>
            </div>
        </div>
    )
}
export default Template
