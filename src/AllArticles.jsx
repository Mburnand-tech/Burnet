import { useEffect , useState } from 'react'
import { useSearchParams , useParams} from 'react-router-dom' 
import { fetchAllArticles } from './utils'
import { Paper, Box } from '@mui/material'

import './App.css'

import RenderArticle from './RenderArticleContent'
import { makeStyles } from '@mui/material'


// const useStyles = makeStyles((theme) => ({
//     root: {
//         "& > *": {
//             margin: 
//         background-color: '#f2dfce'
//         }
//     }
// }))

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

    if (loading) return <p className={`App loadingPage`}> Loading...</p>

    return (
        <ul className={'App subjectArticlesList'}>
        {
            articles.map((article) => {
                return <li key={article.article_id}><Paper sx={{backgroundColor: 'primary.article', '&:hover': {
                    border: '1px solid grey',
                    backgroundColor: 'primary.article',
                   }}} elevation={24}><RenderArticle article={article}/></Paper></li>
                // return <li key={article.article_id}><Box sx={{backgroundColor: 'primary.article', }} elevation={24}><RenderArticle article={article}/></Box></li>
            })
        }
        </ul>

    )
}

export default AllArticles