import {useEffect, useState} from "react";
import {getQuizByUser} from "../../services/apiService";
import './ListQuiz.scss'
const ListQuiz = (props) => {
    const [arrQuiz, setArrQuiz] = useState([])

    useEffect(() => {
        getQuizData();

    }, []);

    const getQuizData = async() =>{
        const res = await getQuizByUser();
        console.log(res);
        // if ( res && res.EC === 0 ){
        //     setArrQuiz(res.DT)
        // } else {
        //     console.error("Error fetching quizzes:", res?.EM || "Unknown error")
        // }
    }
    return (

        <div className="list-quiz-container container">
            {arrQuiz && arrQuiz.length > 0 && arrQuiz.map((quiz, index) =>
            {
                return (
                    <div key = {`${index}-quiz`}
                        className="card" style={{width: "18rem"}}>
                        <img src={`data:image/jpeg;base64,${quiz.image}`} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Card {index + 1}</h5>
                            <p className="card-text"> {quiz.description}</p>
                            <button  className="btn btn-primary">Start</button>
                        </div>
                    </div>
                )
            })
            }

        </div>

    )
}
export default ListQuiz;