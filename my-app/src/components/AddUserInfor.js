import React, {useState} from 'react';
// class AddUserInfor extends React.Component {
//     state ={
//         name :'',
//         address:' ',
//         age:''
//     };
//     handleClick = (event) =>{
//         // console.log('>>Click me my button')
//         // console.log("click me");
//         // console.log("my name is" + this.state.name);
//         // console.log("random", Math.floor(Math.random() * 100) + 1);
//         this.setState({
//             name : '',
//             age:Math.floor(Math.random() * 100) + 1
//         })
//         //mergeState  => state class
//         // this.setState({
//         //     age:Math.floor(Math.random() * 100) + 1
//         // })
//     }
//     handOnchaneInput=(event) => {
//         this.setState({
//             name:event.target.value,
//
//         })
//         console.log(event,event.target.value)
//     }
//     handOnchaneAge=(event) => {
//         //bad code
//         //this.setState.age = event.target.value
//
//         this.setState({
//             age:event.target.value,
//
//         })
//         console.log(event,event.target.value)
//     }
//     handleOnSubmit = (event) =>{
//         // stop reloading page to change the name
//         event.preventDefault();
//         // console.log(this.state.name)
//         // gọi đến handleAddnewUser bên component
//         this.props.handleAddNewUser({
//                 id:Math.floor(Math.random()*100),
//                 name:this.state.name,
//                 age:this.state.age
//             });
//     }
//     render(){
//         return (
//             <div>
//                 My name is {this.state.name} and i'm {this.state.age}
//                 <br/>
//                 {/*<button onMouseOver={this.handlOnMoverOver}>Hover me</button>*/}
//                 {/*<button onClick={(event) => {this.handleClick(event)}}>Click me</button>*/}
//                 <form onSubmit={(event) => {
//                     this.handleOnSubmit(event)
//                 }}>
//                     <label htmlFor="">Your name </label>
//                     <input value={this.state.name} type="text" onChange={(event) => this.handOnchaneInput(event)}/>
//                     <button>Submit</button>
//                     <br/>
//                     <label htmlFor="">Your age </label>
//                     <input value={this.state.age} type="text" onChange={(event) => this.handOnchaneAge(event)}/>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

// sử dụng props từ cha truyền xuống
const AddUserInfor = (props) => {

   const [name,setName] = useState('');
   const [age,setAge] = useState('');


    // handleClick = (event) =>{
    //     this.setState({
    //         name : '',
    //         age:Math.floor(Math.random() * 100) + 1
    //     })
    // }
    const handOnchaneInput=(event) => {
       setName(event.target.value);
    }

    const handOnchaneAge=(event) => {
        setAge(event.target.value);
    }
    const handleOnSubmit = (event) =>{
        event.preventDefault();

        props.handleAddNewUser({
                id:Math.floor(Math.random()*100),
                name:name,
                age:age
            });
    }
    return (
            <div>
                My name is {name} and i'm {age}
                <br/>
                <form onSubmit={(event) => {
                    handleOnSubmit(event)
                }}>
                    <label htmlFor="">Your name </label>
                    <input value={name} type="text" onChange={(event) =>handOnchaneInput(event)}/>
                    <button>Submit</button>
                    <br/>
                    <label htmlFor="">Your age </label>
                    <input value={age} type="text" onChange={(event) => handOnchaneAge(event)}/>
                    <button>Submit</button>
                </form>
            </div>
    )
}
export default AddUserInfor;