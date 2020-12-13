import { Add_Event, Change_Calender_Day } from './action';
const initialState = {
    dayEvents: {},
    calenderDay: new Date()
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_Event:
            const temp = { ...state.dayEvents }
            if (!temp[action.payload.event.id])
                temp[action.payload.event.id] = []
            const temp2 = [...temp[action.payload.event.id]]
            temp2.push(action.payload.event)
            temp[action.payload.event.id] = [...temp2]
            return { ...state, dayEvents: temp };
        case Change_Calender_Day:
            return { ...state, calenderDay: action.payload.newDate }
        default:
            return state;
    }
}
export default reducer;