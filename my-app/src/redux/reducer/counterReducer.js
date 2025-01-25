
import { INCREMENT, DECREMENT } from '../action/counterAction';
const INITIAL_STATE = {
    count: 0,
    name: 'Eric'
};
const countReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // lặp vô hạn , dựa vào id của hành động đấy
        case INCREMENT:
            return {
                ...state, count: state.count + 1,
            };

        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        default: return state;
    }
};

export default countReducer;