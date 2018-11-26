import {combineReducers} from 'redux';
import tracks from './tracks';
import tracks_backend from './tracks_backend';
import authentication from './authentication';


const reducers = combineReducers({
    tracks,
    tracks_backend,
    authentication
});

export default reducers;