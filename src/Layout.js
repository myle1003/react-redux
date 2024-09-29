import { Route, Routes } from "react-router-dom";
import User from './components/User/User';
import App from './App';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/Home';
import ManageUser from './components/Admin/Content/ManageUser';
import Dashboard from './components/Admin/Content/Dashboard';
import Login from './components/Auth/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from "./components/Auth/Sigup";

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<HomePage />} />
                    <Route path="user" element={<User />} />
                </Route>
                <Route path="admin" element={<Admin />}>
                    <Route index element={<Dashboard />} />
                    <Route path="manage-user" element={<ManageUser />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />

            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}
export default Layout
