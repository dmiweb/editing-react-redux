import { EDIT_ITEM } from "./actions";
import { TEditItemAction, TEditItemPayload } from "../models";

const editItem = (item: TEditItemPayload): TEditItemAction => {
  return {
    type: EDIT_ITEM,
    payload: item,
  }
}

export default editItem;