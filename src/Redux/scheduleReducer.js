
const SET_SCHEDULE = 'SET_SCHEDULE'

let initial = {
    schedule: []
}

const scheduleReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_SCHEDULE:
            return {
                ...state,
                schedule: action.payload
            }
        default:
            return state;
    }
};

export default scheduleReducer;