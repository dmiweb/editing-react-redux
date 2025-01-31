import { useDispatch, useSelector } from 'react-redux';
import {addItem, setEditCurrentItem, editItem} from '../../redux';
import { RootState } from '../../models';
import { Button, Input } from '../../components';
import './Form.css';


const Form = () => {
  const dispatch = useDispatch();
  const currentEditItem = useSelector((state: RootState) => state.items.currentEditItem);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.currentTarget as typeof event.currentTarget & {
      name: HTMLInputElement;
      price: HTMLInputElement;
    }

    const name = target.name.value;
    const price = target.price.value;

    if (name.trim() === '' || price.trim() === '') return;

    const item = {
      id: currentEditItem && currentEditItem.id || String(performance.now()),
      name,
      price
    }

    if (currentEditItem) {
      dispatch(editItem(item));
    } else {
      dispatch(addItem(item));
    }

    dispatch(setEditCurrentItem(null));
    event.currentTarget.reset();
  }

  const cancelEditHandler = () => {
    dispatch(setEditCurrentItem(null));
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input type='text' name='name' value={currentEditItem?.name} placeholder='Название услуги' />
      <Input type='number' name='price' value={currentEditItem?.price} placeholder='Цена' />
      <Button type='submit' name='Save' />
      {currentEditItem && <Button type='button' name='Cancel' handler={cancelEditHandler} />}
    </form>
  );
}

export default Form;