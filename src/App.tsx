import React from 'react'
import './App.css'
import Gennerator from './components/Generator'
import Layer from './components/Layer'
import Preview from './components/Preview'
import Code from './components/Code'
import Template from './components/Template'

const App:React.FC = () => {
  return (<div className='App'>
     <div className='left'>
        <Gennerator></Gennerator>
        <Layer></Layer>
      </div>
      <div className='right'>
        <Preview></Preview>
        <Code></Code>
        <Template></Template>
      </div>
  </div>)
}

export default App
