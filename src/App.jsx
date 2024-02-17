import React from 'react'
import routes from '../routes'
import { Route, Routes } from 'react-router-dom'
import Layout from './componets/Layout'

const App = () => {
  return (
    <>
    <Routes>
     {
       routes.map((item , i)=>{
         return <Route 
         key={i}
         path={item.path}
         element={<Layout Componet={item.component} title={item.title}/>}
         />
        })
      }
      </Routes>
    </>
  )
}

export default App
