import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalCreateUser from "./ModalCreatorUser";

const ManageUser =(props) =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
            <div className={"manage-user-container"}>
                <div className={"title"}>
                    Manage User
                </div>
                <div className={"users-content"}>
                    <button> Add new user</button>
                </div>
                <div>
                    <ModalCreateUser></ModalCreateUser>
                </div>
            </div>
    )
}
export default ManageUser