import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Comment from './Comment'
import Theory from './Theory'
const axios = require('axios')
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Theories(props) {

    const [theory, setTheory] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [author, setAuthor] = useState('')

    const handleTheory = (e) => {
        e.preventDefault()
        setTheory(e.target.value)
        setAuthor(props.user.userName)
    }

    const handleSubmit = (e) => {
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
        <div >
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="theory">Got a Theory?</label>
                        <textarea type="text" name="theory" defaultValue="What's your theo...brrrrp...ry?" onChange={handleTheory} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
               <div class="theories">
                {props.theories.map((theory, index) => (
                    <div key={index}>
                        <Theory theory={theory} isAuth={props.isAuth}/>
                    </div>
                ))}
                </div>
                </div>
            </div>
       
    )
}

export default Theories