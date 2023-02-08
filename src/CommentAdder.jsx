import { useState } from 'react'
import { postComment } from './utils'

const CommentAdder = ({setArticleComments, article_id}) => {
    const [newComment, setNewComment ] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        postComment(article_id, newComment)
        .then((postedComment) => {
            setArticleComments((currComments) => {
                return [postedComment[0], ...currComments]
            })
            setNewComment('')
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