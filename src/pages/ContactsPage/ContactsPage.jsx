import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import css from "./ContactsPage.module.css";
import { fetchContacts } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


export default function ContactsPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={css.container}>
            <h1 className={css.head}>Contacts</h1>
            <div className={css.componentsAllWrap}>
                <div className={css.componentsWrap}>
                    <ContactForm />
                    <SearchBox />
                </div>
                <div className={css.componentsWrap}>
                    <ContactList />
                </div>
            </div>
        </div>
    );
}