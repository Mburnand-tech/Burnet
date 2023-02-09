import { useState } from 'react'
import { postComment } from './utils'
import { UserContext } from './contexts/UserContext'
import { useContext } from 'react'

const CommentAdder = ({setArticleComments, article_id}) => {
    const {currentUser , setCurrentUser} = useContext(UserContext)
    const [newComment, setNewComment ] = useState('')
    const [isLoading, setIsLoading ] = useState(false)
    const [err, setErr] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        postComment(article_id, newComment, currentUser[0].username)
        .then((postedComment) => {
            setArticleComments((currComments) => {
                return [postedComment[0], ...currComments]
            })
            setNewComment('')
            setIsLoading(false)
        })
        .catch((err) => {
            setErr(err)

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
            {isLoading == false ? <button>Add</button> : ''}
            {currentUser.length === undefined ? <p>Please log in to make comment</p>:''}
            {err !== '' ? <p>{err.message}</p>:''}
        </form>
    )
}

export default CommentAdder