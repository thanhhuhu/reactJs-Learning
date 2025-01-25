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
const getAllUsers = () =>{
    return axios.get('api/v1/participant/all')

}
const putUpdateUser =( id,username, role, image) =>{
    // submit data
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('api/v1/participant', data)
}
const viewUser = (email, password,username, role, image) =>{
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
}
const deleteUser = (userId) =>{
    return axios.delete('api/v1/participant',{data: {id:userId}})

}
// const getUserWithPaginate = (page, limit) =>{
//     return axios.get('api/v1/participant?page = $\{page}${}limit}')
// }
const postLogin = (email,password) =>{
    // pending delay login
    return axios.post('api/v1/login', {email, password,delay:2000})
}
const postRegister = (email,username,password) =>{
    return axios.post('api/v1/register', {email, username, password})
}

export {postCreateNewUser,getAllUsers, putUpdateUser, viewUser, deleteUser, postLogin, postRegister}