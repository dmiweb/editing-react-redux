import { ADD_ITEM, SET_EDIT_CURRENT_ITEM, EDIT_ITEM, CHANGE_SEARCH_INPUT, REMOVE_ITEM } from "./actions";
import { TAction, TState } from "../models/";

const initialState: TState = {
  items: [],
  currentEditItem: null,
  filteredItems: [],
  searchInputValue: '',
};

const itemsReducer = (state: TState = initialState, action: TAction): TState => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        filteredItems: [...state.filteredItems, action.payload],
      }
    case SET_EDIT_CURRENT_ITEM:
      return {
        ...state,
        currentEditItem: action.payload,
      }
    case EDIT_ITEM:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.name = action.payload.name;
            item.price = action.payload.price;
          }
          return item;
        }),
      }
    case CHANGE_SEARCH_INPUT:
      return {
        ...state,
        filteredItems: state.items.filter((item) => {
          const itemName = item.name.toLowerCase();
          const searchValue = action.payload.toLowerCase();

          return itemName.startsWith(searchValue);
        }),
        searchInputValue: action.payload
      }
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        filteredItems: state.filteredItems.filter((item) => item.id !== action.payload),
      }
    default:
      return state;
  }
};

export default itemsReducer;