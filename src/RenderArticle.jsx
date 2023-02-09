import { Link } from 'react-router-dom' 

const RenderArticle = ({article}) => {

   

    return (
        
        <div>
            <Link to={`/articles/${article.article_id}`}>
                <img src={article.article_img_url} alt={article.title}></img>
                <h3> {article.title}</h3>
            </Link>
                <h4> Posted by {article.author}</h4>
                <p> Comments: {article.comment_count}</p>
                <p> Likes: {article.votes}</p>
                <p> Posted {article.created_at}</p>
        </div>
    )
}

export default RenderArticle