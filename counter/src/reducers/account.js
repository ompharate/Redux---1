import {
    inc,
    dec,
    incByAmt,
} from '../actions';

export function accountReducer(state = {amount:1},action) {
    switch(action.type) {
        case inc:
            return {amount:state.amount + 1};
        case dec:
            return {amount:state.amount - 1};
        case incByAmt:
            return {amount:state.amount + action.payload};
        default:
            return state;
    }

}