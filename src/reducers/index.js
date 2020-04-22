import {combineReducers} from 'redux';
import calculator from './calculator';

const reducer = combineReducers({
  calculator,
});

export default reducer;

// conbineReducersを用いてReducerを結合させる