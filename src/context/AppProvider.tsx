import React,{createContext,useReducer} from 'react'
import {ContextProps,ContextState,initState } from '../Interface.module'

export const AppContext = createContext<ContextState>({} as ContextState)
const initialState:initState={
    css: {
        right: 0,
        down: 0,
        spread: 5,
        blur: 5,
        opacity: 100,
        inset: false,
        color: '#289fed'
      },
      arr1: [{
        right: 0,
        down: 0,
        spread: 5,
        blur: 5,
        opacity: 100,
        inset: false,
        color: '#289fed',
      },
      {
        right: 0,
        down: 0,
        spread: 10,
        blur: 10,
        opacity: 100,
        inset: false,
        color: '#5fb8ff',
      },
      {
        right: 0,
        down: 0,
        spread: 15,
        blur: 15,
        opacity: 100,
        inset: false,
        color: '#a1d8ff',
      },
      {
        right: 0,
        down: 0,
        spread: 20,
        blur: 20,
        opacity: 100,
        inset: false,
        color: '#cae6ff',
      },
      {
        right: 0,
        down: 0,
        spread: 25,
        blur: 25,
        opacity: 100,
        inset: false,
        color: '#e1eeff',
      }
      ],
      arr2: [
        {
          right: 10,
          down: 10,
          spread: 4,
          blur: 3,
          opacity: 70,
          inset: false,
          color: '#eeb5b5',
        },
        {
          right: 0,
          down: 20,
          spread: 4,
          blur: 3,
          opacity: 70,
          inset: false,
          color: '#ebc700',
        },
        {
          right: 20,
          down: 10,
          spread: 4,
          blur: 3,
          opacity: 70,
          inset: false,
          color: '#ec7e00',
        },
        {
          right: 0,
          down: 0,
          spread: 4,
          blur: 3,
          opacity: 70,
          inset: false,
          color: '#a84242',
        }
      ], id: 0,
      layer: 1,
}
const reducer = (state:initState,action:any) => {
    switch (action.type) {
        case 'change':
          const cssnew = { ...state.css, ...action.payload };
          const arr1new = state.layer === 1 ? state.arr1.map((item, index) => index === state.id ? cssnew : item) : state.arr1;
          const arr2new = state.layer === 2 ? state.arr2.map((item, index) => index === state.id ? cssnew : item) : state.arr2;
          return { ...state, css: cssnew, arr1: arr1new, arr2: arr2new }
        case 'add':
          const arr1ne = state.layer === 1 ? [...state.arr1, {
            right: 0,
            down: 0,
            spread: 4,
            blur: 3,
            opacity: 20,
            insert: false,
            color: '#000000',
          }] : state.arr1;
          const arr2ne = state.layer !== 1 ? [...state.arr2, {
            right: 0,
            down: 0,
            spread: 4,
            blur: 3,
            opacity: 70,
            insert: false,
            color: '#000000',
          }] : state.arr2;
          return { ...state, arr1: arr1ne, arr2: arr2ne, id: (state.layer === 1 ? state.arr1.length : state.arr2.length) - 1 };
        case 'remove':
          if (state.arr1.length > 1 && state.arr2.length > 1) {
            const arr1ne1 = state.layer === 1 ? state.arr1.filter((item, index) => index !== state.id) : state.arr1;
            const arr2ne1 = state.layer === 2 ? state.arr2.filter((item, index) => index !== state.id) : state.arr2;
            var count;
            if (state.layer === 1) {
              count = arr1ne1.length > 1 ? state.id : 0;
            }
            else {
              count = arr1ne1.length > 1 ? state.id : 0;
            }
    
            return { ...state, arr1: arr1ne1, arr2: arr2ne1, id: count, css: (state.layer === 1 ? arr1ne1[count] : arr2ne1[count]) };
          }
          else {
            return { ...state }
          }
        case 'changeLayer':
          const layercss = action.payload === 1 ? state.arr1[0] : state.arr2[0];
          return { ...state, layer: action.payload, css: layercss, id: 0 };
        case 'changeId':
          const idcss = state.layer === 1 ? state.arr1[action.payload] : state.arr2[action.payload];
          return { ...state, id: action.payload, css: idcss };
        case 'move':
          const icss =  action.payload.arr[action.payload.id]
          if (state.layer === 1) {
            return { ...state,arr1: [...action.payload.arr],css:icss,id:action.payload.id };
          }
          else {
            return { ...state,arr2: [...action.payload.arr],css:icss,id:action.payload.id };
          }
        default:
          throw new Error();
    
      }
}

const AppProvider: React.FC<ContextProps> = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <>
        <AppContext.Provider value={{ state, dispatch }}>
        {children}
        </AppContext.Provider>
        </>
    )
    }
export default AppProvider;