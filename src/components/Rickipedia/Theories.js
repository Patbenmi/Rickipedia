import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Comment from './Comment'
import Theory from './Theory'
import '../../../src/App.css'
const axios = require('axios')
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL


function Theories(props) {

    const [theory, setTheory] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [comment, setComment] = useState('')
    const [commenter, setCommenter] = useState('')
    const [theorist, setTheorist] = useState('')


    const handleComment = (e) => {
        setComment(e.target.value)
        setCommenter(props.user.userName)
    }

    const handleSubmitComment = (e) => {
        const newComment = {
            theoryId: e.target.getAttribute('data-theory'),
            author: props.user.id,
            comment,
            commenter
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
        setTheorist(props.user.userName)
    }

    const handleSubmit = () => {
        const newTheory = {
            author: props.user.id,
            theory,
            theorist
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
                <img className="welcomeImage" src="https://media.giphy.com/media/l1UOmzUwFTGIuHyJdN/giphy.gif"></img>
            </div>
            <div className="theoriesInfo">
                {
                    props.isAuth
                        ? <div>
                            <form onSubmit={handleSubmit}>
                                <div className="theoryText">
                                    <label htmlFor="theory">Got a Theory?</label>
                                    <textarea className="theoryText" type="text" name="theory" defaultValue="What's your theo...brrrrp...ry?" onChange={handleTheory} />
                                    <button className="theoryBtn" type="submit">Submit</button>
                                </div>
                            </form>
                            <hr></hr>
                            <div class="theoryReverse">
                            {props.theories.map(theory => (
                                <div className="theoryComments">
                                    <p>Posted by: <b>{theory.theorist}  </b> </p> 
                                    {/* <p>a {props.user.rickOrMorty} </p> */}
                                    
                                    <h2 className="ab2">{theory.body}</h2>
                                    <ul>
                                        <p>
                                            {theory.comments.map(comment => (
                                                <li>
                                                    <p><b>{comment.userName}</b>: {comment.body}</p>
                                                </li>
                                            ))}
                                        </p>
                                    </ul>
                                    <form data-theory={theory._id} onSubmit={handleSubmitComment}>
                                        <textarea className="commentText" name="comment" type="text" defaultValue="Comment on this theory" onChange={handleComment} />
                                        <br></br>
                                        <button className="theoryBtn" type="submit">Add Comment</button>
                                        <hr></hr>
                                    </form>
                                </div>
                            ))}
                            </div>
                        </div>
                        : <div>
                            {props.theories.map(theory => (
                                <div>
                                    <p>Posited by: <b>{theory.theorist}</b></p>
                                    <h2>{theory.body}</h2>
                                    <ul>
                                        {theory.comments.map(comment => (
                                            <li>
                                                <p><b>{comment.userName}</b>: {comment.body}</p>
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
