import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppProvider'
import InputValue from '../ui/InputComponent'
import { ConvertColor } from '../util'

const Preview:React.FC =() =>{
  const { state } = useContext(AppContext)
  const [background, setBackground] = useState('#3D9DF6')
  const [underground, setUnderground] = useState('#e4dcdc')
  let arr = [...(state.layer === 1 ? state.arr1 : state.arr2)]
  let shadow = ''
  arr.map((item, index) => {
    shadow += `${ConvertColor(item.color,item.opacity)} ${item.right}px ${item.down}px ${item.blur}px ${item.spread}px ${item.inset ? 'inset' : ''}, `
  })

  return (
    <div style={{ width: '450px', height: '400px', background: underground , margin:'10px 20px'}}>
      <InputValue type="color" values={underground} onChange={(e) => setUnderground(e.target.value)} />
      <InputValue type="color" values={background} onChange={(e) => setBackground(e.target.value)} />

      {state.layer === 1 ? <div className='shape' style={{ width: '200px', height: '200px', background: background,margin:'40px'}}>
        <div style={{ width: '200px', height: '200px', boxShadow:shadow.slice(0, -3)}}></div>
      </div> :
        <div className='shape2' style={{ width: '200px', height: '200px', background: background,margin:'40px' }}>
          <div style={{ width: '200px', height: '200px', boxShadow:shadow.slice(0, -3) }}></div>
        </div>}
    </div>
  )
}

export default Preview