// để tách code ra khỏi modalCreatorUser để tối ưu hơn và dễ fix hơn
// đặt tên biến cho axios thế nào cũng được vì bên axiosCustomize chỉ xuất ra 1 biến là instance
// ví dụ như import abc from ...
import axios from '../ultis/axiosCustomize';
const postCreateNewUser =(email, password, username, role, image) =>{
    // submit data
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('api/v1/participant', data)
}
export {postCreateNewUser}