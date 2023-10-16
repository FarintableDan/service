import { combineReducers } from "redux";

import servicesReducer from "./services/reducer";
import detailsReducer from "./details/reducer";
import errorHandlerReducer from "./errorHandlers/reducer";

const rootReducer = combineReducers({
  services: servicesReducer,
  details: detailsReducer,
  errorHandlers: errorHandlerReducer,
});

export default rootReducer;
