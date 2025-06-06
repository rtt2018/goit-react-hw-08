import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { css } from "./contactsPage.module.css";

export default function ContactsPage() {
    return (
        <div>
            <h1>Contacts</h1>
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