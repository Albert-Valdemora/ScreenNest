import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DashboardRoutes } from './DashboardRoutes'


export const AppRouter = () => {
  return (

    <BrowserRouter>
      <Routes>
      {/* <Route path='/login' element={}></Route> */}
      <Route path='/*' element={<DashboardRoutes/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
