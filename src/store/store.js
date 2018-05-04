import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { todoApp } from './reducer';
import userSaga from '../sagas/sagas';
import { sagaMiddleware } from '../sagas/index';

const reducer = combineReducers({
    form: reduxFormReducer,
    todoApp
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(userSaga);

export default store;