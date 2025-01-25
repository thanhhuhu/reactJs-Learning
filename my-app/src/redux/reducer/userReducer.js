
import { INCREMENT, DECREMENT } from '../action/counterAction';
import {FETCH_USER_LOGIN_SUCCESS} from "../action/userAction";

const INITIAL_STATE = {
    account:{
        access_token: '',
        refresh_token: '',
        username: '',
    },
    // biến để biết người dùng đã đăng nhập chưa
    isAuthenticated: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // lặp vô hạn , dựa vào id của hành động đấy
        case FETCH_USER_LOGIN_SUCCESS:
            return {
                ...state, account :{
                    access_token: action?.payload?.DT?.access_token,
                    refresh_token: action?.payload?.DT?.refresh_token,
                    username: action?.payload?.DT?.username,
                    image: action?.payload?.DT?.image,
                    role: action?.payload?.DT?.role,
                },
                isAuthenticated: true,
            };

        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        default: return state;
    }
};

export default userReducer;