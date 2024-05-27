import { useEffect , useState } from 'react'
import { useSearchParams , useParams} from 'react-router-dom' 
import { fetchAllArticles } from './utils'
import { Paper, CircularProgress} from '@mui/material'

import './App.css'

import RenderArticle from './RenderArticleContent'


const AllArticles = () => {
    
    const [ loading, setLoading ] = useState(false)
    const [ articles, setArticles ] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()    
    const {topic} = useParams()

    useEffect(()=> {
        setLoading(true)

        const newParams = new URLSearchParams(searchParams)
        newParams.set('topic', topic)
        setSearchParams(newParams)

        fetchAllArticles(searchParams)
        .then((data)=> {
            setArticles(data)
            setLoading(false)
        })
    }, [searchParams, setSearchParams, topic])

    if (loading) return <p className={`App loadingPage`}>  <CircularProgress /></p>

    return (
        <ul className={'App subjectArticlesList'}>
        {
            articles.map((article) => {
                return <li key={article.article_id} className={'App subjectArticlesListIndv'}><Paper className={'App subjectArticles'} sx={{backgroundColor: 'primary.article', border: '1px solid black', '&:hover': {
                    border: '1px solid grey',
                    backgroundColor: 'primary.article',
                   }}} elevation={4}><RenderArticle article={article}/></Paper></li>
                // return <li key={article.article_id}><Box sx={{backgroundColor: 'primary.article', }} elevation={24}><RenderArticle article={article}/></Box></li>
            })
        }
        </ul>

    )
}

export default AllArticles