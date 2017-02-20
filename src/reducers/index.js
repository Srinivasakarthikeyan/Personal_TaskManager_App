import { combineReducers } from 'redux';

import lists from './lists';

let rootReducer = combineReducers({
    lists
});

export default rootReducer;