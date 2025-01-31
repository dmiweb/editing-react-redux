import { ADD_ITEM } from "./actions";
import { TAddItemAction, TAddItemPayload } from "../models";

const addItem = (item: TAddItemPayload): TAddItemAction  => {
  return {
    type: ADD_ITEM,
    payload: item,
  }
}

export default addItem;