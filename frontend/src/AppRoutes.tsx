import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layouts/Layout'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout >Home Page</Layout>} />
        <Route path="/user-profile" element={<span>Home PAge</span>} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes