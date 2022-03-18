import axios from "axios";
import React  from "react";

function TaskItem(props){
    const API_SERVER_BASE = process.env.REACT_APP_API_SERVER_BASE
    const API_SERVER_DELETE = process.env.REACT_APP_API_SERVER_DELETE


    const deleteTaskHandler = (task) => {
        axios.delete(API_SERVER_BASE + API_SERVER_DELETE + `${task}`)
        .then(res => console.log(res.data))
        .catch(error => console.error(error))
    // .finally(() => console.log('done'));
    }
    return(
        <div>
            <p>
            path: {API_SERVER_BASE + API_SERVER_DELETE + props.task.task}
            </p>
            <p>
                <span style={{'fontWeight':'bold, underline'}}>
                    {props.task.task} :  </span>
                {props.task.location}
                <button
                    onClick={() => deleteTaskHandler(props.task.task)}
                    className="btn btn-outline-danger my-2 mx-2"
                    style={{'borderRadius':'50px'}}    >
                     X </button>
            </p>
            <hr></hr>
        </div>
    )
}

export default TaskItem