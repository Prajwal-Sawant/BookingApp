import { createContext, useReducer } from "react";


 const Initial_State = {
  city: undefined,
  dates:[],
  options:{
    adult:undefined,
    children:undefined,
    room:undefined,
  },
};

export const SearchContext = createContext(Initial_State);

export const SearchReducer = (state,action) => {
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return Initial_State;
        default:
            return state;        
    }
};

export const SearchContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(SearchReducer, Initial_State);

    return(
        <SearchContext.Provider value={{city: state.city, dates:state.dates, options:state.options, dispatch}}>
            {children}
        </SearchContext.Provider>
    )
};