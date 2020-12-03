import { TOGGLE_MENU } from "./asideTypes"

const initialState = {
    open:false
}

export const asideReducer = (state = initialState, { type }) => {
    switch (type) {

    case TOGGLE_MENU:
        return { ...state, open: !state.open }

    default:
        return state
    }
}
