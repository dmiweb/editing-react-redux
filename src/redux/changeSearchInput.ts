import { CHANGE_SEARCH_INPUT } from "./actions"
import {TChangeSearchInputAction, TChangeSearchInputPayload} from "../models"

const changeSearchInput = (value: TChangeSearchInputPayload): TChangeSearchInputAction => {
  return {
    type: CHANGE_SEARCH_INPUT,
    payload: value,
  }
}

export default changeSearchInput;