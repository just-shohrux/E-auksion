import {all} from 'redux-saga/effects';
import normalizer from "./../../services/normalizer/saga";
import api from "./../../services/api/saga";
import auth from "./../../modules/auth/saga";

export default function* sagas() {
    yield all([
        normalizer(),
        api(),
        auth(),
    ]);
}
