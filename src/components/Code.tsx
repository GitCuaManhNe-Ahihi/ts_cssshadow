import React,{useContext} from 'react'
import { AppContext } from '../context/AppProvider'
import { ConvertColor } from '../util'
const Code:React.FC = () => {
    const { state } = useContext(AppContext)
    let arr = [...(state.layer === 1 ? state.arr1 : state.arr2)]
    let shadow:string = ''
    arr.map((item) => {
      shadow += `${ConvertColor(item.color,item.opacity)} ${item.right}px ${item.down}px ${item.blur}px ${item.spread}px ${item.inset ? 'inset' : ''}, `
    })
  return (
    <div style={{ width: '450px', boxShadow:'black 0px 0px 10px' , margin:'10px 20px'}}>Code:
        {
        ' '+shadow.slice(0, -3)+';'
        }
    </div>
  )
}
export default Code