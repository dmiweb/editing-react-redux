import { combineReducers, legacy_createStore } from 'redux';
import { itemsReducer } from '../redux';

// const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      items: itemsReducer,
    }),
    // ReactReduxDevTools
  );
}
export default configureStore;
