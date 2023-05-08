import { useState } from 'react'
import { postComment } from './utils'
import { UserContext } from './contexts/UserContext'
import { useContext } from 'react'
import { Button } from '@mui/material'

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
        <div className='App commentAdderDiv'>
            {currentUser === 'null' ? <p>Please log in to make comment</p>:
            <form onSubmit={handleSubmit}>
                <label htmlFor="newComment"></label>
                <textarea 
                className='App commentAdderForm'
                placeholder=' Write a comment ...'
                rows='10'
                
                id="newComment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                {isLoading === false ? <Button className='App postCommentButton' variant="contained" onClick={handleSubmit}>Post Comment</Button> : ''}
                {err !== '' ? <p>{err.message}</p>:''}
            </form>}
        </div>
    )
}

export default CommentAdder