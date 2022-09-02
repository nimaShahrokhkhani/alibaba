import * as actions from './actionTypes';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case actions.DARK_MODE:
            state.darkMode = !state.darkMode
            return state
        default:
            return state;
    }
}