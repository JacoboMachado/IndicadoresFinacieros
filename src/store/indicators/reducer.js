const INITIAL_STATE = {}

export default function indicatorsReducer(state = INITIAL_STATE, action){
    switch (action.indicator) {
        case 'Dolares':
            return {
                ...state,
                Dolares: action.payload 
            }
        case 'UFs':
            return {
                ...state,
                UFs: action.payload
            }
        default:
            return state;
    }
}