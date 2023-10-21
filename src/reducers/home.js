import { inc } from "../actions";
export function homeReducer(state = {value:0},action) {
    switch (action.type) {
        case inc:
            return { value: state.value + 1 };    
        default:
            return state;
    }
}
