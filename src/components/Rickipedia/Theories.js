import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
const axios = require('axios')
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Theories(props) {

    const [theory, setTheory] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [author, setAuthor] = useState('')

    const handleTheory = (e) => {
        setTheory(e.target.value)
        setAuthor(props.user.userName)
    }

    const handleSubmit = () => {
        const newTheory = { author, theory }
        axios.post(`${REACT_APP_SERVER_URL}/wiki/theories`, newTheory)
            .then(response => {
                console.log(response)
                setRedirect(true)
            })
            .catch(err => console.log(err))
    }
    if (redirect) return <Redirect to="/theories" />

    return (
        <div>
            {
                props.isAuth
                    ? <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="theory">Got a Theory?</label>
                                <textarea type="text" name="theory" defaultValue="What's your theo...brrrrp...ry?" onChange={handleTheory} />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                        {props.theories.map(theory => (
                            <div>
                                <p>Posited by: {theory.author}</p>
                                <h2>{theory.body}</h2>
                                <textarea type="text" defaultValue="Leave a comment" />
                                <button type="submit">Submit</button>
                            </div>
                        ))}
                    </div>
                    : <div>
                        {props.theories.map(theory => (
                            <div>
                                <p>Posited by: {theory.author}</p>
                                <h2>{theory.body}</h2>
                            </div>
                        ))}
                    </div>
            }
        </div>
    )
}

export default Theories