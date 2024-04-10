import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layouts/Layout'
import HomePage from './Pages/HomePage'
import AuthCallbackPage from './Pages/AuthCallbackPage'
import UserProfilePage from './Pages/UserProfilePage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout showHero><HomePage /></Layout>} />
            <Route path="/user-profile" element={<Layout><UserProfilePage/></Layout>} />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes