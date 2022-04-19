import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import ListPage from '../page/ListPage/ListPage';
import RegisterPage from '../page/RegisterPage/RegisterPage';

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/user">
                    <Route path='list' element={<ListPage />} />
                    <Route path='register' element={<RegisterPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/user/register" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute