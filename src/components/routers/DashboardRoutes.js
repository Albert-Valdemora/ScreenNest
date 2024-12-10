import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../menu/Navbar'
import { AboutUs } from '../info/AboutUs'
import { FAQs } from '../info/FAQs'
import { TermsConditions } from '../info/TermsConditions'
import { Inicio } from '../view/Inicio'
import { MoviePeli } from '../movie&serie/MoviePeli'


export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='AboutUs' element={<AboutUs />} />
        <Route path='FAQs' element={<FAQs />} />
        <Route path='TermsConditions' element={<TermsConditions />} />
        <Route path='moviePeli/:moviePeliId' element={<MoviePeli />} />
      </Routes>
    </>
  )
}
