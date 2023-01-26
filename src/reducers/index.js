import { 
    ADD_MOVIES_TO_LIST,
    ADD_MOVIES,
    ADD_FAVOURITES,
    REMOVE_FAVOURITES,
    SET_SHOW_FAVOURITES,
    ADD_SEARCH_RESULT 
} from "../actions";
import { combineReducers } from "redux";
const initialState = {
    list:[],
    favourites:[],
    showFavourites:false
}
export function movies(state=initialState,action){
    // if(action.type===ADD_MOVIES){
    //     return {...state,
    //     list:action.movies}
    // }
    // return state;
    switch(action.type){
        case ADD_MOVIES:
            return {...state,
                    list:action.movies};
        case ADD_FAVOURITES:
            return {
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case REMOVE_FAVOURITES:
            const filteredArr = state.favourites.filter(movie=> movie.Title!==action.movie.Title);
            return {
                list:state.list,
                favourites:filteredArr
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites:action.val
            }
        case ADD_MOVIES_TO_LIST:
            return {
                ...state,list:[action.movie,...state.list]
            };
        default:
            return state;
    }
}
const initialSearchState = {
    result:{},
    showSearchResule: false,
};
export function search(state=initialState,action){
    switch (action.type){
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResule:true
            }
        case ADD_MOVIES_TO_LIST:
            return {
                ...state,
                showSearchResule:false
            };
        default:
            return state;
    }
}
// const initialRootState = {
//     movies:initialState,
//     search:initialSearchState
// }
// export default function rootReducer(state=initialRootState,action){
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }
export default combineReducers(
    {
        movies,
        search
    }
);