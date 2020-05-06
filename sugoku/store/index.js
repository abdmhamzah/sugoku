import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerBoard from "./reducers/reducerBoard";
import reducerPlayer from "./reducers/reducerPlayer";

const reducers = combineReducers({
  reducerBoard,
  reducerPlayer,
});
const middlewares = applyMiddleware(thunk);
const store = createStore(reducers, middlewares);

export default store;
