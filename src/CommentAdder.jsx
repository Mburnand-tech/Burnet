import { useState } from 'react'
import { postComment } from './utils'

const CommentAdder = ({setArticleComments, article_id}) => {
    const [newComment, setNewComment ] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(newComment ,'Comment Submitted!')
        //setArticleComments()
        postComment(article_id, newComment)
        .then((postedComment) => {
            console.log(postedComment, "Posted Comment success")
        })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newComment"> Add a comment</label>
            <textarea 
            id="newComment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button>Add</button>
        </form>
    )
}

export default CommentAdder