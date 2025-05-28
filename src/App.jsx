import './App.css'
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <div className="componentsAllWrap">
        <div className="componentsWrap">
          <ContactForm />
          <SearchBox />
        </div>
        <div className="componentsWrap">
          <ContactList />
        </div>
      </div>
    </div>
  )
}
