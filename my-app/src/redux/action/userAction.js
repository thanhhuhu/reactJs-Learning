
// Hàm để khi thay đổi tên biến thì có thể thay đổi của toàn bộ
export const FETCH_USER_LOGIN_SUCCESS = 'FETCH_USER_LOGIN_SUCCESS'
export const doLogin = (data)=>{
    return {
        type: FETCH_USER_LOGIN_SUCCESS,
        payload:data
    }
}