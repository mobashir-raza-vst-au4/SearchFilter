import {combineReducers, createStore} from 'redux';
import setData from './setData';
import setId from './setId';
import setInput from './setInput';

const rootReducers = combineReducers({
    setData: setData,
    setId: setId,
    setInput: setInput
});

export default createStore(rootReducers);