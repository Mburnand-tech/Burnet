import { Link } from 'react-router-dom' 
import moment from 'moment-timezone';

import './App.css'

const RenderArticle = ({article, position}) => {

    return (
        
        <div className={'App homeArticleContent'}>
            <Link to={`/articles/${article.article_id}`}>
                {/* <div>{position}</div> */}
                <img className={position === 0 ? 'App homeArticlesPictureFirst' : position === 1 ? 'App homeArticlesPictureSecond' : 'App homeArticlesPictureRest'} src={article.article_img_url} alt={article.title}></img>
                <h4 className={'App homeArticlesPostedBy'}> Posted by {article.author}</h4>
                <p className={'App homeArticlesCreatedAt'}> {moment(article.created_at, "YYYYMMDD").startOf('hour').fromNow()}</p>
                <h3 className={'App homeArticlesTitle'}> {article.title}</h3>
                <p className={'App homeArticlesComments'}> Comments: {article.comment_count}</p>
                <p className={'App homeArticlesLikes'}> Likes: {article.votes}</p>
            </Link>
                
        </div>
    )
}

export default RenderArticle