import { combineReducers } from 'redux';

import count from './components/count/reducer';
import async from './components/async/reducer';
import mural from './components/mural/reducer';

const rootReducer = combineReducers({
  mural,
  count,
  async,
});

export default rootReducer;

