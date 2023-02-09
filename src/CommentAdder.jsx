import { useState } from 'react'
import { postComment } from './utils'
import { UserContext } from './contexts/UserContext'
import { useContext } from 'react'

const CommentAdder = ({setArticleComments, article_id}) => {
    const {currentUser , setCurrentUser} = useContext(UserContext)
    const [newComment, setNewComment ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        postComment(article_id, newComment, currentUser[0].username)
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