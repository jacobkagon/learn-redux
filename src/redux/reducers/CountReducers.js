import * as actionTypes from '../actionTypes'

const initalState = {
    nums: []
}


const CountReducer = (state = initalState, action) => {
    switch(action.type) {
        case 'INCREASE_COUNT' :
            return {
                ...state,
               nums: [...state.nums, action.newNum],
            };
            default: return state
}
}
export default CountReducer