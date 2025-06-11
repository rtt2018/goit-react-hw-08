import './App.css'
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout/Layout';
import { Routes, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import { lazy, Suspense } from "react";
import { PuffLoader } from "react-spinners";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'))
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'))

export default function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Suspense fallback={<PuffLoader
          color="#8c66c5"
          cssOverride={{}}
          className='loader' />
        } >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} />} />
            <Route path="/login" element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />} />
            <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />} />
            <Route path="*" element={<RegistrationPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}
