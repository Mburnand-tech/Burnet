import { useEffect , useState } from 'react'
import { fetchSpecificArticle , getArticleReviews, likeArticle } from './utils'
import { useParams } from 'react-router-dom'
import CommentAdder from './CommentAdder'


const Article = () => {
    const [ loading, setLoading ] = useState(true)
    const [ articleContent , setArticleContent ] = useState([])
    const { article_id } = useParams()
    const [ articleComments, setArticleComments ] = useState([])
    const [err, setErr] = useState('')
    const [votedOn , setVotedOn ] = useState(false)
    //----------- Weird how it only works for true in this doc but false in th Content doc
    

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
        if (votedOn === false){
            setVotedOn(true)
            setArticleContent((currContent) => {
                currContent[0].votes += 1
                return {...currContent}
            })
            likeArticle(article_id, 1)
            .catch((err) => {
                setErr(err)
            })
        }
        else if (votedOn === true){
            setVotedOn(false)
            setArticleContent((currContent) => {
                currContent[0].votes -= 1
                return {...currContent}
            })
            likeArticle(article_id, -1)
            .catch((err) => {
                setErr(err)
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
                <button onClick={handleArticleLike}>👍 {articleContent[0].votes}</button>
                {err !== '' ? <p>{err.message}</p>: ''}
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
                            <p>{comment.votes}</p>
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}

export default Article