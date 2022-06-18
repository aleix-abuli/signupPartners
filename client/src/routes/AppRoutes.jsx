import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import LogInPage from '../pages/LogInPage/LogInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import UserPage from '../pages/UserPage/UserPage';
import NewStorePage from '../pages/Stores/NewStorePage';
import StoreDetailsPage from '../pages/Stores/StoreDetailsPage';
import NewItemPage from '../pages/Items/NewItemPage';
import PrivateRoute from './PrivateRoute';

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/login' element={<LogInPage />} />

                <Route path="/partners/:id" element={<PrivateRoute />}>
                    <Route path="" element={<UserPage />} />
                </Route>

                <Route path='/stores/new' element={<PrivateRoute />}>
                    <Route path='' element={<NewStorePage />} />
                </Route>
                
                <Route path='/stores/:storeId' element={<PrivateRoute />}>
                    <Route path='' element={<StoreDetailsPage />} />
                </Route>

                <Route path='stores/:storeId/items/new' element={<PrivateRoute />}>
                    <Route path='' element={<NewItemPage />} />
                </Route>

            </Routes>
        </>
    );
};