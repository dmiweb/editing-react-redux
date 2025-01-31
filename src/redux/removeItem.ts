import { REMOVE_ITEM } from "./actions"
import {TRemoveItemAction, TRemoveItemPayload} from "../models"

const removeItem = (itemId: TRemoveItemPayload): TRemoveItemAction => {
  return {
    type: REMOVE_ITEM,
    payload: itemId,
  }
}

export default removeItem;