import './App.css'
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contacts/operations';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout/Layout';
import AppBar from './components/AppBar/AppBar';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Layout >
        <AppBar />

      </Layout >
    </>
  )
}
