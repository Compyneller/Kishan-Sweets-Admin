import { combineReducers } from "redux";
import Auth from "./Auth";
import { SuperMainCatTableReducer } from "./SuperMainCatTable";
import Theme from "./Theme";

const reducers = combineReducers({
  theme: Theme,
  auth: Auth,
  superMainCatTable: SuperMainCatTableReducer,
});

export default reducers;
