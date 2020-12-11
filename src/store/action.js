
export const Add_Event = 'ADD_EVENT';

export const addEvent = (event) => {
    return { type: Add_Event, payload: {event} }
} 