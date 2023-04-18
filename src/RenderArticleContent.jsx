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
        <Link to={`/articles/${article.article_id}`}>
            <div className={'App subjectArticles'}>
                <p className={'App postedDate'}> Posted {article.created_at}</p>
                <h4 className={'App postedBy'}> Posted by {article.author}</h4>
                <img src={article.article_img_url} alt={article.title} className={' App subjectArticlesPicture'}></img>
                <h3 className={'App articleTitle'}> {article.title}</h3>
                <p className={' App subjectArticlesBody'}>{articleContent}</p>
                <p className={'App articleComments'}> Comments: {article.comment_count}</p>
                <p className={'App articleLikes'}> Likes: {article.votes}</p>    
            </div>
        </Link>
    )
}

export default RenderArticle