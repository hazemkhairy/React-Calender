
export const Add_Event = 'ADD_EVENT';
export const Change_Calender_Day = 'CHANGE_CALENDER_DAY';

export const changeCalenderDay = (newDate) => {
    return { type: Change_Calender_Day, payload: { newDate } }
}
export const addEvent = (event) => {
    return { type: Add_Event, payload: { event } }
} 