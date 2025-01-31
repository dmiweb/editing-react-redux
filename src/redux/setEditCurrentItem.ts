import { SET_EDIT_CURRENT_ITEM } from "./actions"
import { TSetEditCurrentItemAction, TSetEditCurrentItemPayload } from "../models";

const setEditCurrentItem = (item: TSetEditCurrentItemPayload): TSetEditCurrentItemAction => {
  return {
    type: SET_EDIT_CURRENT_ITEM,
    payload: item,
  }
}

export default setEditCurrentItem;