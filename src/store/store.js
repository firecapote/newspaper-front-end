import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { todoApp } from './reducer';
import userSaga from '../sagas/sagas';
import { sagaMiddleware } from '../sagas/index';

const reducer = combineReducers({
    form: reduxFormReducer,
    todoApp
});

const store = (createStore)(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(userSaga);

export default store;

// export function runRedux(){
//     console.log(store.getState());
//
//     let unsubscribe = store.subscribe(() =>
//         console.log(store.getState())
//     );
//
//     store.dispatch(signIn({email: 'masdk@df.dsf', password: '12345'}));
//
//     console.log(store.getState());
//
//     unsubscribe();
// }