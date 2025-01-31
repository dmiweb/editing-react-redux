import { useDispatch } from 'react-redux';
import { setEditCurrentItem, removeItem } from '../../redux';
import { TItem } from '../../models';
import { Button } from '../../components';
import './ListItem.css';

const ListItem = ({ item }: { item: TItem }) => {
  const dispatch = useDispatch();

  const editHandler = () => {
    dispatch(setEditCurrentItem(item));
  }

  const removeHandler = () => {
    dispatch(removeItem(item.id));
    dispatch(setEditCurrentItem(null));
  }

  return (
    <li id={item.id} className='list-item'>
      <span>{item.name}</span>
      <span>{item.price}</span>
      <Button
        type='button'
        className='item-edit-btn'
        name='&#9998;'
        handler={editHandler}
      />
      <Button
        type='button'
        className='item-remove-btn'
        name='&#10006;'
        handler={removeHandler}
      />
    </li>
  );
}

export default ListItem;