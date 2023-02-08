import { useState } from 'react'
import { postComment } from './utils'
import { UserContext } from './contexts/UserContext'

const CommentAdder = ({setArticleComments, article_id}) => {
    const [currentUser ] = useState(UserContext._currentValue.currentUser)
    const [newComment, setNewComment ] = useState('')
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        postComment(article_id, newComment, currentUser)
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