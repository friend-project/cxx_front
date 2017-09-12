import { combineReducers } from 'redux';

import count from './components/count/reducer';
import async from './components/async/reducer';
import mural from './components/mural/reducer';
import exhibition from './components/exhibition/reducer';
import exhibitionDetail from './components/exhibitionDetail/reducer';

const rootReducer = combineReducers({
  mural,
  count,
  async,
  exhibition,
  exhibitionDetail,
});

export default rootReducer;
