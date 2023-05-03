import { useEffect , useState, useContext } from 'react'
import { fetchSpecificArticle , getArticleReviews, likeArticle, likeComment, deleteComment, getUser } from './utils'
import { useParams } from 'react-router-dom'
import CommentAdder from './CommentAdder'
import { Button } from '@mui/material';
import { UserContext } from './contexts/UserContext'
import moment from 'moment-timezone';
import { Paper, Avatar, CircularProgress} from '@mui/material'



const Article = () => {

    const  {currentUser}  = useContext(UserContext)

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
            const returnComments = []
            let counter = 0 
            comments.forEach((comment) => {
                getUser(comment.author).then((result) => {
                        comment['avatar_url'] = result[0].avatar_url
                        returnComments.push(comment)
                        if (returnComments.length === comments.length){
                            console.log('check')
                            setArticleComments(returnComments)
                            setLoading(false)
                        }
                })
            })
            // setArticleComments(comments)
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

    const handleDeleteComment = (comment_id) => {
        
        const filtered = articleComments.filter(rmComment => 
            rmComment.comment_id !== comment_id)
        
        setArticleComments([...filtered])

        deleteComment(comment_id)
    }
    if (loading) return <p className={'App loadingPage'}> <CircularProgress /></p>

    return (
        <div>
            <div className={'App articleOpened'}>
                <Paper sx={{backgroundColor: 'primary.article'}} elevation={24}>
                    <h3 className={'App postedByOpened'}>Created by: {articleContent[0].author}</h3>
                    <h3 className={'App postedDateOpened'}>{moment(articleContent[0].created_at).startOf().fromNow()}</h3>
                    <h1>{articleContent[0].title}</h1>
                    <img src={articleContent[0].article_img_url} alt={articleContent[0].title} className={' App subjectArticlesPictureOpened'}></img>
                    <p className={'App subjectArticleBodyOpened'}>{articleContent[0].body} </p>
                    <Button onClick={() => handleArticleLike()}>👍 {articleContent[0].votes}</Button>
                    {errArticle !== '' ? <p>{errArticle.message}</p>: ''}
                </Paper>
            </div>
            <div className={'App articleOpened'}>
                <Paper sx={{backgroundColor: 'primary.article'}} elevation={24}>
                    <h2>Comments</h2>
                    <CommentAdder setArticleComments={setArticleComments} article_id={article_id}/>
                    <ul className={'App commentsList'}>
                        {articleComments.map((comment) => {
                            return (
                                <li key={comment.comment_id}>
                                    {/* <script>console.log(comment)</script> */}
                                    <div className={'App commentAvatar'}><Avatar src={comment.avatar_url}></Avatar></div>
                                    <h5 className={'App commentPostedByOpened'}>{comment.author}</h5>
                                    <p className={'App commentDateOpened'}>{moment(comment.created_at).startOf().fromNow()}</p>
                                    <p className={'App commentBodyOpened'}>{comment.body}</p>
                                    <Button onClick={() => handleCommentLike(comment.comment_id)}>👍 {comment.votes}</Button>
                                    {currentUser === 'null' ? null : comment.author === currentUser[0].username ? <Button onClick={()=> handleDeleteComment(comment.comment_id)}>delete</Button> : null}
                                    {errComment !== '' ? <p>{errComment.message}</p>: ''}
                                </li>
                            )
                        })}
                    </ul>
                </Paper>
            </div>
        </div>
    )
}

export default Article