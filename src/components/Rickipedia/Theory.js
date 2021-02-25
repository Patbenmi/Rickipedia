import React from 'react'
import Comment from './Comment'

export default function Theory(props) {

  const handleComment = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <p>Posited by: {props.theory.author}</p>
      <h2>{props.theory.body}</h2>
      <div>
        <form onSubmit={handleComment}>
          <textarea type="text" defaultValue="Leave a comment" />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {props.theory.comments.map((comment, index) => (
            <li key={index}>
              <Comment comment={comment} isAuth={props.isAuth} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}