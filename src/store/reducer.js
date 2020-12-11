import { Add_Event } from './action';
const initialState = {
    dayEvents: {}
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_Event:
            const temp = { ...state.dayEvents }
            if (!temp[action.payload.event.id])
                temp[action.payload.event.id] = []
            temp[action.payload.event.id].push(action.payload.event)
            return { ...state, dayEvents: temp };
        default:
            return state;
    }
}
export default reducer;