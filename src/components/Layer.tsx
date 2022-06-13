import { DragEvent, useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../context/AppProvider'
import LayerElement from './LayerElement'

const  Layer:React.FC = ()=> {
  const { state, dispatch } = useContext(AppContext)
  const [arr, setArr] = useState(state.layer === 1 ? state.arr1 : state.arr2)
  useEffect(() => {
    setArr(state.layer === 1 ? state.arr1 : state.arr2)
  }, [state])
  const start = useRef<number>(0)
  const postion = useRef<number>(0)
  const OnDragStart = (e:DragEvent<HTMLLIElement>) => {
    const target  = e.target as HTMLLIElement
    start.current = +target.id
    postion.current = e.clientY
  }
  const OnDragEnter = (e:DragEvent<HTMLLIElement>) => {
    const target  = e.target as HTMLLIElement
    e.preventDefault();
   target.style.border= '1px solid #000';
    const data = { ...arr[start.current] }
    if (+target.id === start.current) {
      return
    }
    if (+target.id> start.current) {
      let data2 = arr[+start.current + 1]
      setArr([...arr.slice(0, start.current), data2, data, ...arr.slice(+start.current + 2, arr.length)])
    }
    else {
      let data2 = arr[+start.current - 1]
      setArr([...arr.slice(0, start.current - 1), data, data2, ...arr.slice(+start.current + 1, arr.length)])
    }
  }
  const OnDragLeave = (e:DragEvent<HTMLLIElement>) => {
    e.preventDefault()
    const target  = e.target as HTMLLIElement
    target.style.border= '1px solid #000'

 }
 const OnDragEnd = (e:DragEvent<HTMLLIElement>) => {
    const target  = e.target as HTMLLIElement
    if (postion.current > e.clientY) {
      dispatch({ type: 'move', payload: { arr, id: +start.current-1} })
    } else {
      dispatch({ type: 'move', payload: { arr, id: +start.current + 1 } })
    }
  }
  return (
    <div>
      <button onClick={() => dispatch({ type: 'add' })}>Add layer</button>
      <ul id='containlayer' style={{ display: 'block', maxHeight: '400px', boxShadow: 'black 0px 0px 10px ' }}>
        {
          arr.map((item, index) => {
            return (
              <LayerElement key={index} ids={index.toString()} value={{ ...item }} OnDragStart ={OnDragStart} OnDragEnter={OnDragEnter} OnDragLeave={OnDragLeave} OnDragEnd={OnDragEnd}  ></LayerElement>

            )
          })}
      </ul>
    </div>
  )
}

export default Layer