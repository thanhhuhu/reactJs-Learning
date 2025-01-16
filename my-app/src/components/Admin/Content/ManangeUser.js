// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import ModalCreateUser from "./ModalCreatorUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from "./tableUser";
import {useEffect, useState} from "react";
import{getAllUsers} from "../../../services/apiService";
const ManageUser =() =>{
    //biến để khi nhấn add thì sẽ sẽ hiện thông tin để add
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [listUsers,setListUsers] = useState([]);

    //componentDidMount
    //kéo api để hiện user vào table
    // useEffect: Đây là một hook trong React, được sử dụng để thực hiện các
    // hiệu ứng phụ (side effects), như gọi API, lắng nghe sự kiện, hoặc thao tác DOM.
    // []: Mảng phụ thuộc rỗng nghĩa là useEffect chỉ chạy một lần duy nhất sau khi component được render lần đầu.
    // fetchListUsers(): Gọi hàm fetchListUsers để lấy danh sách người dùng từ API khi component vừa được hiển thị.
    useEffect(() =>{
        fetchListUsers();
    },[]);
    //Đây là một hàm bất đồng bộ (asynchronous function) để thực hiện gọi API.
    // getAllUsers: Đây có vẻ là một hàm được định nghĩa ở đâu đó (không có trong đoạn mã trên).
    // Hàm này có nhiệm vụ gọi API để lấy danh sách người dùng.
    //     await: Dùng để chờ kết quả của getAllUsers (do nó là một promise). Kết quả trả về được gán vào biến res.
    const fetchListUsers = async () =>{
        let res = await getAllUsers();
        if(res.EC === 0){
            setListUsers(res.DT)
        }
    }
    // Khi component được render lần đầu, useEffect chạy và gọi fetchListUsers.
    //     Hàm fetchListUsers gọi API getAllUsers để lấy danh sách người dùng.
    //     Nếu API trả về kết quả thành công (EC === 0), danh sách người dùng (DT) được lưu vào state listUsers.
    //     Sau đó, danh sách này có thể được hiển thị trên giao diện, ví dụ như trong một bảng (table)

    //hàm bất đồng bộ cần keyword async
    // const testFunction = async () => {
    //     let res = await getAllUsers();
    //     if(res.EC === 0){
    //         setListUsers(res.DT)
    //     }
    // }

    return (
            <div className={"manage-user-container"}>
                <div className={"title"}>
                    Manage User
                </div>
                <div className={"users-content"}>
                    <button className={"btn btn-primary"}
                            // khi nhấn vào nút add thì sẽ cập nhật setshow cập nhật lại thành true để hiện
                            onClick={() => setShowModalCreateUser(true)}>
                        <FcPlus/> Add new user</button>
                </div>
                <div className={"table-users-container"}>
                      <TableUser listUsers={listUsers}/>
                </div>
                <ModalCreateUser
                    show = {showModalCreateUser}
                    setShow = {setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                    // testFunction = {testFunction}
                />
            </div>
    )
}
export default ManageUser