import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeSearchInput } from '../../redux';
import { Input } from "../../components";
import './Search.css';

const Search = () => {
  const timeoutRef = useRef<number | null>(null);
  const dispatch = useDispatch();

  const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchInputValue = event.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      dispatch(changeSearchInput(searchInputValue));

      timeoutRef.current = null;
    }, 300);
  }

  return (
    <Input
      type='search'
      name='search'
      className='search'
      placeholder='Поиск по услугам'
      handler={handleInputSearch}
    />
  );
}

export default Search;