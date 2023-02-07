import { useEffect , useState } from 'react'
import { fetchSpecificArticle , getArticleReviews } from './utils'
import { useParams } from 'react-router-dom'
import CommentAdder from './CommentAdder'

const Article = () => {
    //console.log('CHECK!')
    const [ loading, setLoading ] = useState(true)
    const [ articleContent , setArticleContent ] = useState([])
    const { article_id } = useParams()
    const [ articleComments, setArticleComments ] = useState([])
    //----------- Weird how it only works for true in this doc but false in th Content doc
    
    useEffect(() => {
        setLoading(true)
        //console.log(loading, "MY loading")
        Promise.all([fetchSpecificArticle(article_id), getArticleReviews(article_id)])
        .then(([{article} , comments ]) => {
            //console.log(data, "comment data")
            setArticleComments(comments)
            setLoading(false)
            //console.log(loading, "MY loading")
            setArticleContent(article)
            
            
        })
    }, [article_id])

    if (loading) return <p> Loading...</p>

    return (
        <div>
            <div>
                <h1>{articleContent[0].title}</h1>
                <h3>Date:{articleContent[0].created_at}</h3>
                <h3>Created by: {articleContent[0].author}</h3>
                <p>{articleContent[0].body} </p>
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