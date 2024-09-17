import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../menu/Navbar'
import { AboutUs } from '../info/AboutUs'
import { FAQs } from '../info/FAQs'
import { PrivacyPolicy } from '../info/PrivacyPolicy'
import { TermsConditions } from '../info/TermsConditions'
import { DMCAPolicy } from '../info/DMCAPolicy'
import { Inicio } from '../view/Inicio'


export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='AboutUs' element={<AboutUs />} />
        <Route path='FAQs' element={<FAQs />} />
        <Route path='PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='TermsConditions' element={<TermsConditions />} />
        <Route path='DMCAPolicy' element={<DMCAPolicy />} />
      </Routes>
    </>
  )
}
