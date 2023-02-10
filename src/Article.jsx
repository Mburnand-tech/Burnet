import { useEffect , useState } from 'react'
import { fetchSpecificArticle , getArticleReviews, likeArticle, likeComment } from './utils'
import { useParams } from 'react-router-dom'
import CommentAdder from './CommentAdder'
import { Button } from '@mui/material';


const Article = () => {
    const [ loading, setLoading ] = useState(true)
    const [ articleContent , setArticleContent ] = useState([])
    const { article_id } = useParams()
    const [ articleComments, setArticleComments ] = useState([])
    const [errArticle, setErrArticle] = useState('')
    const [errComment, setErrComment] = useState('')
    const [votedOnArticle , setVotedOnArticle ] = useState(false)
    const [votedOnComment , setVotedOnComment ] = useState(false)
    //----------- Weird how it only works for true in this doc but false in the Content doc
    

    useEffect(() => {
        setLoading(true)
        Promise.all([fetchSpecificArticle(article_id), getArticleReviews(article_id)])
        .then(([{article} , comments ]) => {
            setArticleComments(comments)
            setLoading(false)
            setArticleContent(article)
        })
    }, [article_id])

    const handleArticleLike = () => {
        if (votedOnArticle === false){
            setVotedOnArticle(true)
            setArticleContent((currContent) => {
                currContent[0].votes += 1
                return {...currContent}
            })
            likeArticle(article_id, 1)
            .catch((err) => {
                setErrArticle(err)
            })
        }
        else if (votedOnArticle === true){
            setVotedOnArticle(false)
            setArticleContent((currContent) => {
                currContent[0].votes -= 1
                return {...currContent}
            })
            likeArticle(article_id, -1)
            .catch((err) => {
                setErrArticle(err)
            })
        }
    }

    const handleCommentLike = (comment_id) => {
        if (votedOnComment === false){
            setVotedOnComment(true)
            setArticleComments((currComments) => {
                let adjustComments = [...currComments]
                adjustComments.map((comment) => {
                    if (comment.comment_id === comment_id){
                        comment.votes += 1                      
                    }
                })
                return adjustComments
            })
            likeComment(comment_id, 1)
            .catch((err) => {
                setErrComment(err)
            })
        }
        else if (votedOnComment === true){
            setVotedOnComment(false)
            setArticleComments((currComments) => {
                let adjustComments = [...currComments]
                adjustComments.map((comment) => {
                    if (comment.comment_id === comment_id){
                        comment.votes -= 1                      
                    }
                })
                return adjustComments
            })
            likeComment(comment_id, -1)
            .catch((err) => {
                setErrComment(err)
            })
        }
    }
        

    if (loading) return <p> Loading...</p>
    return (
        <div>
            <div>
                <h1>{articleContent[0].title}</h1>
                <h3>Date:{articleContent[0].created_at}</h3>
                <h3>Created by: {articleContent[0].author}</h3>
                <p>{articleContent[0].body} </p>
                <Button onClick={() => handleArticleLike()}>👍 {articleContent[0].votes}</Button>
                {errArticle !== '' ? <p>{errArticle.message}</p>: ''}
            </div>
            <h2>Comments</h2>
            <CommentAdder setArticleComments={setArticleComments} article_id={article_id}/>
            <ul>
                {articleComments.map((comment) => {
                    return (
                        <li key={comment.comment_id}>
                            <h5>{comment.author}</h5>
                            <p>{comment.created_at}</p>
                            <p>{comment.body}</p>
                            <Button onClick={() => handleCommentLike(comment.comment_id)}>👍 {comment.votes}</Button>
                            {errComment !== '' ? <p>{errComment.message}</p>: ''}
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}

export default Article