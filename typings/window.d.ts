// interface Window {
//   __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
//   __REDUX_DEVTOOLS_EXTENSION__: any;
// }

import { compose, StoreEnhancer } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?:
      | (() => StoreEnhancer)
      | { compose: typeof compose }
      | boolean
      | undefined;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}