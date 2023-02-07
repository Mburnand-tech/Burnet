import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom' 
import { fetchAllArticles } from './utils'

import Filter from './Filter'
import RenderArticle from './RenderArticle'



const Content = () => {
    const [ loading, setLoading ] = useState(false)
    const [ articles, setArticles ] = useState([])
    
    const paraEnd  = useParams()

    useEffect(()=> {
        setLoading(true)
        fetchAllArticles(paraEnd)
        .then((data)=> {
            setArticles(data)
            setLoading(false)
        })
    }, [paraEnd])

    if (loading) return <p> Loading...</p>

 return (
    <Filter/>,
    <ul>
    {
        articles.map((article) => {
            return <li key={article.article_id}><RenderArticle article={article}/></li>
        })
    }
    </ul>
 )
}

export default Content