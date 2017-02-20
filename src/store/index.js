


import rootReducer from '../reducers';
import { createStore} from 'redux';

//import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(preloadedState) {
  const store = createStore(rootReducer)
  return store;
}

