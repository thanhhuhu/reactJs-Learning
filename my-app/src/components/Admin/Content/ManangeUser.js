import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalCreateUser from "./ModalCreatorUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import TableUser from "./tableUser";

const ManageUser =(props) =>{
    //biến để khi nhấn add thì sẽ sẽ hiện thông tin để add
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

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
                      <TableUser/>
                </div>
                <ModalCreateUser
                    show = {showModalCreateUser}
                    setShow = {setShowModalCreateUser}
                />
            </div>
    )
}
export default ManageUser