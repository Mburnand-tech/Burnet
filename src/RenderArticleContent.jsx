import { useEffect , useState} from 'react'
import { fetchSpecificArticle } from './utils'
import { Link } from 'react-router-dom' 

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
        
        <div className={'App subjectArticles'}>
            <Link to={`/articles/${article.article_id}`}>
                <img src={article.article_img_url} alt={article.title} className={' App subjectArticlesPicture'}></img>
                <h3> {article.title}</h3>
            </Link>
                <p> Posted {article.created_at}</p>
                <h4> Posted by {article.author}</h4>
                <p className={' App subjectArticlesBody'}>{articleContent}</p>
                <p> Comments: {article.comment_count}</p>
                <p> Likes: {article.votes}</p>
                
        </div>
    )
}

export default RenderArticle