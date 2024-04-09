import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layouts/Layout'
import HomePage from './Pages/HomePage'
import AuthCallbackPage from './Pages/AuthCallbackPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout ><HomePage /></Layout>} />
            <Route path="/user-profile" element={<span>User Profile PAge</span>} />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes