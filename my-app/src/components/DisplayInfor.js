import React, { useState } from 'react';
import './DisplayInfor.scss';
// stateless vs stateful

// class DisplayInfor extends React.Component {
//     //destructuring array/object
//     //Props => viết tắt properties
//     // constructor(props) {
//     //     console.log('call constructor : 1 ')
//     //     super(props);
//     //     this.state = {
//     //         isVisible: true,
//     //     };
//     // }
// // componentDidMount() {
// //         console.log('>> call me component did mount');
// //         setTimeout(() => {
// //             document.title ='ReactLearning';
// //         }, 3000)
// // }
// // // Phải truyền tham số đầu vào
// // // hàm did update chỉ xảy ra khi có sử thay đổi state hoặc props để update
// // componentDidUpdate(prevProps, prevState, snapshot) {
// //     console.log('>> call me component did update', this.props, prevProps);
// //     if (this.props. listUser !== prevProps.listUser) {
// //         if(this.props.listUser.length === 5) {
// //             alert('You got 5 user')
// //         }
// //     }
// // }
//
//     // handleShowHide = () => {
//     //     this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
//     //
//     // }
//
//     render (){
//         console.log('>> call me render')
//         //nhanh hơn và gọn hơn
//         const {listUser} = this.props; //object
//         // console.log(listUser);
//         // in ra một bảng chứa nhiều object
//         // console.table(listUser);
//         //const listUser = this.props.listUser;
//         // const { isVisible } = true;
//         return (
//             // template + logic js
//             <div className="Display-infor-container">
//                 {/*<img src={logo} alt="logo" />*/}
//                 {/*Sử dụng vòng lặp để hiện thị các phần tử bên trong array nhanh hơn thay vì ghi từng cái */}
//                 {/*{listUser.map((user, index) =>{*/}
//                 {/*  console.log("Check map user",user)*/}
//                 {/*<div>*/}
//                 {/*    <span onClick={(event) => {*/}
//                 {/*        this.handleShowHide(event)*/}
//                 {/*    }}>Hide list users: </span>*/}
//                 {/*</div>*/}
//                  <>
//                         {listUser && listUser.length > 0 ? (
//                             listUser.map((user, index) => (
//                                 <div
//                                     key={user.id}
//                                     className={+user.age > 18 ? 'green' : 'red'}
//                                     style={{marginBottom: '10px'}}
//                                 >
//                                     <div style={{color: 'blue', paddingTop: '50px'}}>My name is {user.name}</div>
//                                     <div>I'm {user.age} years old</div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr/>
//                                 </div>
//                             ))
//                         ) : (
//                             <div>No users available</div>
//                         )}
//                     </>

//                 {/*    // Sử dụng if else để hiện những người có số tuổi lớn 18 và tùy theo màu*/}

//                 {/*    // if (+user.age > 18)*/}
//                 {/*    // {*/}
//                 {/*    //     return (*/}
//                 {/*    //         <div key={user.id} className="green">*/}
//                 {/*    //             <div>My name 's {user.name}</div>*/}
//                 {/*    //             <div>I'm {user.age}</div>*/}
//                 {/*    //             <hr/>*/}
//                 {/*    //         </div>*/}
//                 {/*    //     )*/}
//                 {/*    // } else {*/}
//                 {/*    //     return (*/}
//                 {/*    //         <div key={user.id} className="red">*/}
//                 {/*    //             <div>My name 's {user.name}</div>*/}
//                 {/*    //             <div>Im' {user.age} </div>*/}
//                 {/*    //             <hr/>*/}
//                 {/*    //         </div>*/}
//                 {/*    //     )*/}
//                 {/*    // }*/}

//                 {/*})*/}
//                 {/*    /!*<div>My name is {name}</div>*!/*/
//                 {/*    /!*<div>My age is {age}</div>*!/*/
//                 {/*    /!*<hr/>*!/*/
//                 {/*    /!*<div>My name is {name}</div>*!/*/
//                 {/*    /!*<div>My age is {age}</div>*!/*/
//                 {/*    /!*<hr/>*!/*/
//                 {/*    /!*<div>My name is {name}</div>*!/*/
//                 {/*    /!*<div>My age is {age}</div>*!/*/
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {

    // Khi không dùng state Phải truyền biến props để không phải sử dụng keyword this
    const { listUser } = props; // object

    // khai báo biến state của component
    // dùng cú pháp destructuring assignment
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    // dùng cú pháp hiện đại của react, react hook
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    return (
        // template + logic js
        <div className="Display-infor-container">
            <div>
                <span onClick={() => {handleShowHideListUser()}}>
                    Show list user
                    <br/>
                    {isShowHideListUser === true ? "Hide" : " Show list"}
                </span>
            </div>
            {isShowHideListUser && (
                <div>
                    {listUser && listUser.length > 0 ? (
                        listUser.map((user) => (
                            <div
                                key={user.id}
                                className={+user.age > 18 ? 'green' : 'red'}
                                style={{ marginBottom: '10px' }}
                            >
                                <div style={{ color: 'blue', paddingTop: '10px' }}>
                                    My name is {user.name}
                                </div>
                                <div>I'm {user.age} years old</div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        ))
                    ) : (
                        <div>No users available</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default DisplayInfor;
