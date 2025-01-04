import logo from './logo.svg';
import './App.scss';
import MyComponent  from "./components/MyComponents";
import React from 'react';
import DisplayInfor from "./components/DisplayInfor";


class App extends React.Component {
    // state ={
    //     name :'Thanh',
    //     address:'Danang ',
    //     age:22
    // };
    // handleClick = (event) =>{
    //     // console.log('>>Click me my button')
    //     // console.log("click me");
    //     // console.log("my name is" + this.state.name);
    //     // console.log("random", Math.floor(Math.random() * 100) + 1);
    //     this.setState({
    //         name : ' Chau',
    //         age:Math.floor(Math.random() * 100) + 1
    //     })
    //     //mergeState  => state class
    //     // this.setState({
    //     //     age:Math.floor(Math.random() * 100) + 1
    //     // })
    // }
    // handOnchaneInput=(event) => {
    //     this.setState({
    //         name:event.target.value,
    //
    //     })
    //    console.log(event,event.target.value)
    // }
    // handOnchaneAge=(event) => {
    //     //bad code
    //     //this.setState.age = event.target.value
    //
    //     this.setState({
    //         age:event.target.value,
    //
    //     })
    //     console.log(event,event.target.value)
    // }
    // handleOnSubmit = (event) =>{
    //     // stop reloading page to change the name
    //   event.preventDefault();
    //  console.log(this.state.name)
    // }
    render (){
        return (
            // <div>
            //     My name is {this.state.name} and i'm {this.state.age}
            //     <br/>
            //     {/*<button onMouseOver={this.handlOnMoverOver}>Hover me</button>*/}
            //     {/*<button onClick={(event) => {this.handleClick(event)}}>Click me</button>*/}
            //     <form onSubmit={(event) => {
            //         this.handleOnSubmit(event)
            //     }}>
            //         <label htmlFor="">Your name </label>
            //         <input value={this.state.name} type="text" onChange={(event) => this.handOnchaneInput(event)}/>
            //         <button>Submit</button>
            //         <br/>
            //         <label htmlFor="">Your age </label>
            //         <input value={this.state.age} type="text" onChange={(event) => this.handOnchaneAge(event)}/>
            //         <button>Submit</button>
            //
            //     </form>
            // </div>
            <div className="app-container">
                <MyComponent></MyComponent>
            </div>
    );
    }
}

// function App() {
//     return (
//         <div className="App">
//           <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//               Edit <code>src/App.js</code> and save to reload.
//             </p>
//             <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn React
//             </a>
//           </header>
//         </div>
//     );
// }

export default App;
