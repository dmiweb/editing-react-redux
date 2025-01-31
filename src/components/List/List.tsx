import { useSelector } from 'react-redux';
import { RootState } from '../../models';
import ListItem from '../ListItem/ListItem';
import './List.css';

const List = () => {
  const { items, filteredItems, searchInputValue } = useSelector((state: RootState) => state.items);

  const getItems = () => {
    if (filteredItems.length) return filteredItems;
    if (!filteredItems.length && !searchInputValue) return items
    if (!filteredItems.length && searchInputValue) return;
  }

  const currentItems = getItems() || [];

  return (
    <>
      {!items.length && <div className='no-items'>Нет записей...</div>}
      
      {
        !filteredItems.length && searchInputValue && items.length ?
          <div className='no-items'>Нет похожих записей...</div> :
          null
      }

      {items.length || filteredItems.length ?
        <ul className='list'>
          {currentItems.map(item => <ListItem key={item.id} item={item} />)}
        </ul> :
        null
      }
    </>
  );
}

export default List;