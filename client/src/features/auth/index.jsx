import { Route, Routes, Navigate } from "react-router-dom"
import { AuthLayout } from "../auth/components/AuthLayout/AuthLayout"
import { Login, SignUp, ForgotPassword } from "../auth/pages"

export const AuthFeature = () => {
    console.log('a');
    return (
        <Routes>
            <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
            <Route path="/signup" element={<AuthLayout><SignUp /></AuthLayout>} />
            <Route path="/forgot-password" element={<AuthLayout><ForgotPassword /></AuthLayout>} />
            <Route path='*' element={<Navigate to='/auth/login' />} />
        </Routes>
    )
}