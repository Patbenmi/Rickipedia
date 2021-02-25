import React from 'react'

export default function Comment(props) {
  return (
    <div>
        <li>
          <p>{props.comment.author}</p>
          <p>{props.comment.body}</p>
        </li>
    </div>
  )
}