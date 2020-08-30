import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn295678Reducer from '../features/SignIn295678/redux/reducers'
import SignIn295663Reducer from '../features/SignIn295663/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn295678: SignIn295678Reducer,
SignIn295663: SignIn295663Reducer,

});