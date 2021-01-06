import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from "redux-saga";
import { authSaga } from "./authSaga";
import { signUpSaga } from "./regSaga";
import { saveCardSaga } from "./paymentSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(authSaga);
sagaMiddleware.run(signUpSaga);
sagaMiddleware.run(saveCardSaga);