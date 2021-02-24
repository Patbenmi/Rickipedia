import React from 'react'

function Theories(props) {
    return(
        <div>
            {props.theories.map(theory => (
                <div>
                    <p>{theory.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Theories