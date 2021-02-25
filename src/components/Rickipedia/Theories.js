import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Comment from './Comment'
import Theory from './Theory'
const axios = require('axios')
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Theories(props) {

    const [theory, setTheory] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [comment, setComment] = useState('')


    const handleComment = (e) => {
        setComment(e.target.value)
    }

    const handleSubmitComment = (e) => {
        const newComment = {
            theoryId: e.target.getAttribute('data-theory'),
            author: props.user.id,
            comment
        }
        axios.post(`${REACT_APP_SERVER_URL}/wiki/comments`, newComment)
            .then(response => {
                console.log(response)
                setRedirect(true)
            })
            .catch(err => console.log(err))
    }


    const handleTheory = (e) => {
        e.preventDefault()
        setTheory(e.target.value)
    }

    const handleSubmit = () => {
        const newTheory = {
            author: props.user.id,
            theory
        }
        axios.post(`${REACT_APP_SERVER_URL}/wiki/theories`, newTheory)
            .then(response => {
                console.log(response)
                setRedirect(true)
            })
            .catch(err => console.log(err))
    }

    if (redirect) return <Redirect to="/theories" />

    return (
        <div className="theoriesPage">
            <div className="theoriesTitle">
                <h1 className="ab1">Theories</h1>
                <br>
                </br>
            </div>
        <div>
            {
                props.isAuth
                    ? <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="theory">Got a Theory?</label>
                                <textarea type="text" name="theory" defaultValue="What's your theo...brrrrp...ry?" onChange={handleTheory} />
                            </div>
                            <button className="homeBtn" type="submit">Submit</button>
                        </form>
                        <hr></hr>
                        {props.theories.map(theory => (
                            <div>
                                <p>Posited by: {theory.author}</p>
                                <h2>{theory.body}</h2>
                                <ul>
                                    {theory.comments.map(comment => (
                                        <li>
                                            <p>{comment.author}</p>
                                            <p>{comment.body}</p>
                                        </li>
                                    ))}
                                </ul>
                                <form data-theory={theory._id} onSubmit={handleSubmitComment}>
                                    <textarea name="comment" type="text" defaultValue="Leave a comment" onChange={handleComment} />
                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        ))}
                    </div>
                    : <div>
                        {props.theories.map(theory => (
                            <div>
                                <p>Posited by: {theory.author}</p>
                                <h2>{theory.body}</h2>
                                <ul>
                                    {theory.comments.map(comment => (
                                        <li>
                                            <p>{comment.author}</p>
                                            <p>{comment.body}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
            }
        </div>
        </div>
    )
}

export default Theories
