import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';


export default function SearchBox() {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectNameFilter)

  const onChange = (event) => {
    dispatch(changeFilter(event.target.value))
  }

  return (
    <div className={css.container}>
      <label className={css.labelFindContact}>Find contacts by name
        <input className={css.contactFindInput} type="text" value={searchValue} onChange={onChange} />
      </label>
    </div>
  );
}
