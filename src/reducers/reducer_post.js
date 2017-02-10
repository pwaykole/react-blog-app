import { FETCH_POST, FETCH_INPOST } from '../actions/index';

const INITIAL_STATE = {all:[], post: null};

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case FETCH_POST:
            return {...state, all: action.payload.data};
        case FETCH_INPOST:
            return {...state, post: action.payload.data}
        default:
            return state;
    }
}