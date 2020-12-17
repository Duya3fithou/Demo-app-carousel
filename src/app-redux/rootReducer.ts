import { combineReducers } from 'redux';
import resource from './resource/reducer';
import userInfo from './userInfo/reducer';
import favorite from './favorite/reducer';

const rootReducer = combineReducers({
    resource,
    userInfo,
    favorite,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
