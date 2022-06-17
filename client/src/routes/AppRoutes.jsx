import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import LogInPage from '../pages/LogInPage/LogInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage/>} />
                <Route path='/signup' element={<SignUpPage/>} />
                <Route path='/login' element={<LogInPage/>} />
            </Routes>
        </>
    );
};