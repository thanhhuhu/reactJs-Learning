import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
// import axios from "axios";
import { toast } from 'react-toastify';
import {putUpdateUser} from "../../../services/apiService";
import _ from 'lodash';


const ModalUpdateUser =(props) =>{
    const {show, setShow, dataUpdate} = props;
    // const [show, setShow] = useState(false);

    // khi nhấn vào handleClose sẽ cập nhật lại biến setShow thành false để tắt
    const handleClose = () => {
        // khi tắt modal thì tất cả các ô input sẽ clear
        setShow(false);
        setEmail("")
        setPassword("")
        setUsername("")
        setImage("")
        setRole("USER")
        setPreviewImage("")
        props.resetUpdateUpdate();
    };

    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const[username,setUsername] =useState("");
    const [image,setImage] =useState("");
    const [role,setRole] =useState("USER");
    const [previewImage,setPreviewImage]=useState("");


    // chạy khi data update của người dùng thay đổi
    useEffect(()=>{
        console.log('run effect', dataUpdate)
        // check xem dataUpdate có rỗng hay không
        // sử dụng thư viện lodash
        // nếu biến không rỗng
        if(!_.isEmpty(dataUpdate)){
            // update state
            setEmail(dataUpdate.email)
            setUsername(dataUpdate.username)
            setRole(dataUpdate.role)
            setImage("")
            // vì ảnh mã hóa sang dạng base64
            if (dataUpdate.image) {
                setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`)
            }
        }
        // Mỗi lần biến dataUpdate, cần phải cập nhật lại dữ liệu
    },[props.dataUpdate])

    // fucntion upload ảnh
    const handleUploadImage = (event) =>{
        // điều kiện nếu không upload ảnh thì sẽ có chữ preview image
        if (event.target && event.target.files && event.target.files[0]){
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }else {
            setPreviewImage("");
        }
    }
    // xác thực email
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleSubmitCreateUser = async () =>{

        // call apis
        // gửi file lên server
        // const data = new FormData();
        // data.append('email', email);
        // data.append('password', password);
        // data.append('username', username);
        // data.append('role', role);
        // data.append('userImage', image);

        // validate(xác thực ) dữ liệu
        const isValidEmail = validateEmail(email);
        if(!isValidEmail){
            toast.error("Invalid email");
            // toast.info("Invalid email");
            // toast.success("Invalid email");
            return;
        }
        // phải có password và email
        //validate
        // if (!password){
        //     toast.error("Invalid password");
        //     return;
        // }
        let data = await putUpdateUser(dataUpdate.id, username, role, image);
        // Nếu save thành công sẽ hiện thông báo và tắt modal
        if (data && data.EC === 0){
            toast.success(data.EM)
            handleClose();
            await props.fetchListUsers();
        }
        // nếu save không thành công sẽ hiện thông báo lỗi
        if (data && data.EC !== 0){
            toast.error(data.EM);
        }
    }

    // console.log('check dataUpdate', props.dataUpdate);
    console.log('check render data update', dataUpdate)
    return (
        <div>
            {/*<Button variant="primary" onClick={handleShow}>*/}
            {/*    Add new user*/}
            {/*</Button>*/}
            <Modal
                show={show}
                onHide={handleClose}
                size={"xl"}
                // static : khi nhấn bên ngoài thì sẽ có animation
                backdrop={"static"}
                className = "modal-add-user"
            >

                <Modal.Header closeButton>
                    <Modal.Title>Update a user </Modal.Title>
                </Modal.Header>
                {/*phần body của form dùng bootstrap*/}
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email"
                                   value={email}
                                   className="form-control"
                                   disabled
                                   onChange={(event) => setEmail(event.target.value)}/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password"
                                   value={password}
                                   className="form-control"
                                   disabled
                                   onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input type="text" value={username} className="form-control"
                                   onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select"
                                    onChange={(event) => setRole(event.target.value)}
                            >
                                <option selected value={"USER"}>USER</option>
                                <option value={"ADMIN"}>ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label label-upload" htmlFor="labelUpload">
                                <FcPlus/> Upload file image
                            </label>
                            <input
                                type="file"
                                id="labelUpload"
                                hidden
                                onChange={handleUploadImage}
                            />
                        </div>
                        {/*htmlFor khi cùng id với ô input sẽ nhận thuộc tính upload img (để giống như html)*/}
                        <div className="col-md-12 img-preview">
                            {previewImage ?
                                <img src={previewImage} alt={""}/>
                                :
                                <span> Preview image </span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=> handleSubmitCreateUser()}>
                        Save
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default ModalUpdateUser