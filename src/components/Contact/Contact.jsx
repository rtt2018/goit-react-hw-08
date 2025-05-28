import css from './Contact.module.css';
import { FaUserLarge } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { deleteContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';


export default function Contact({ people }) {

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteContact(people.id))
  }

  return (
    <li className={css.listItem}>
      <div>
        <div className={css.contactDataWrapper}>
          <FaUserLarge />
          <p className={css.contactDataDescript}>{people.name}</p>
        </div>
        <div className={css.contactDataWrapper}>
          <FaPhone />
          <p className={css.contactDataDescript}>{people.number}</p>
        </div>
      </div>
      <button onClick={handleClick} className={css.contactDeleteButton} type='button'>Delete</button>
    </li>
  );
}
