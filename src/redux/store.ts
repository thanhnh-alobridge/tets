import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import history from '@utils/history';

import reducers from './root.reducer';

const middlewares = [thunk, routerMiddleware(history)];

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
const persistor = persistStore(store);

export { store, persistor };
