import {combineReducers} from 'redux';
import normalizer from "./../../services/normalizer/reducers";
import auth from "./../../modules/auth/reducers";

export default combineReducers({
    normalizer,
    auth,
});
