import React from "react"

function Todo (props){
    return(
        <>
            <div>
                <h1>{props.title}</h1>
                <h2>{props.userId}</h2>
            </div>
        </>
    )
}

export default Todo