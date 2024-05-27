import { useEffect , useState} from 'react'
import { fetchSpecificArticle } from './utils'
import { Link } from 'react-router-dom' 
import moment from 'moment-timezone';

import './App.css'

const RenderArticle = ({article}) => {

    const [articleContent, setArticleContent] = useState('')

    useEffect(()=> {
        fetchSpecificArticle(article.article_id)
        .then(({article}) => {
            setArticleContent(article[0].body)
            
        })
    }, [article.article_id])
   
    return (
            <div >
                <Link className={'app articleLink'} to={`/category/${article.topic}`}>
                    <h4 className={'App topic'}>{article.topic}</h4>
                </Link>
                <Link className={'app articleLink'} to={`/articles/${article.article_id}`}>
                    <h4 className={'App postedBy'}> Posted by {article.author}</h4>
                    <p className={'App postedDate'}>{moment(article.created_at, "YYYYMMDD").startOf('hour').fromNow()}</p>
                    <img src={article.article_img_url} alt={article.title} className={' App subjectArticlesPicture'}></img>
                    <h3 className={'App articleTitle'}> {article.title}</h3>
                    <p className={' App subjectArticlesBody'}>{articleContent}</p>
                    <p className={'App articleComments'}> Comments: {article.comment_count}</p>
                    <p className={'App articleLikes'}> Likes: {article.votes}</p>    
                </Link>
            </div>
            
    )
}

export default RenderArticle