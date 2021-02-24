import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
const axios = require('axios')
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Theories(props) {

    const [theory, setTheory] = useState('')
    const [redirect, setRedirect] = useState(false)

    const handleTheory = (e) => {
        setTheory(e.target.value)
    }

    const handleSubmit = () => {
        const newTheory = { theory }
        axios.post(`${REACT_APP_SERVER_URL}/wiki/theories`, newTheory)
        .then(response => {
            console.log(response)
            setRedirect(true)
        })
        .catch(err => console.log(err))
    }
    if (redirect) return <Redirect to="/theories" />

    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="theory">Got a Theory?</label>
                        <textarea type="text" name="theory" defaultValue="What's your theo...brrrrp...ry?" onChange={handleTheory} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                {props.theories.map(theory => (
                    <div>
                        <p>{theory.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Theories