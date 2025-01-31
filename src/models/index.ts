import { 
  ADD_ITEM, 
  SET_EDIT_CURRENT_ITEM, 
  EDIT_ITEM, REMOVE_ITEM, 
  CHANGE_SEARCH_INPUT 
} from "../redux/actions";

export type TItem = {
  id: string,
  name: string,
  price: string,
}

export type TAddItemPayload = {
  id: string,
  name: string,
  price: string,
}

export type TEditItemPayload = {
  id: string,
  name: string,
  price: string,
}

export type TSetEditCurrentItemPayload = {
  id: string,
  name: string,
  price: string,
} | null

export type TRemoveItemPayload = string;

export type TChangeSearchInputPayload = string;

export type TAddItemAction = {
  type: typeof ADD_ITEM,
  payload: TAddItemPayload,
}

export type TEditItemAction = {
  type: typeof EDIT_ITEM,
  payload: TEditItemPayload,
}

export type TSetEditCurrentItemAction = {
  type: typeof SET_EDIT_CURRENT_ITEM,
  payload: TSetEditCurrentItemPayload | null,
}

export type TRemoveItemAction = {
  type: typeof REMOVE_ITEM,
  payload: TRemoveItemPayload,
}

export type TChangeSearchInputAction = {
  type: typeof CHANGE_SEARCH_INPUT,
  payload: TChangeSearchInputPayload,
}

export type TAction =
  | TAddItemAction
  | TEditItemAction
  | TSetEditCurrentItemAction
  | TRemoveItemAction
  | TChangeSearchInputAction;

export type TState = {
  items: TItem[],
  currentEditItem: TItem | null,
  filteredItems: TItem[],
  searchInputValue: string
}

export type RootState = {
  items: TState,
};