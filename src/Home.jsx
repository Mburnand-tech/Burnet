import { useEffect , useState } from 'react'
import { fetchAllArticles } from './utils'
import "./App.css"
import { CircularProgress, Paper    } from '@mui/material'
// import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';

import RenderArticle from './RenderArticle'

const Home = () => {
    const [ loading, setLoading ] = useState(false)
    const [ articles, setArticles ] = useState([])

    useEffect(()=> {
        setLoading(true)
        fetchAllArticles()
        .then((data)=> {
            setArticles(data)
            setLoading(false)
        })
    }, [])
    // Why is if I type 'articles in array above it creates an infinite loop

    if (loading) return <p className={'App loadingPage'}> <CircularProgress /></p>
    return (
        <div>
            <ul  className={'App flex-container'}>
                {
                    articles.map((article, index) => {
                        return <li key={article.article_id} className={index === 0 ? 'App homeArticleFirstList' : index === 1 ? 'App homeArticleSecondThirdList' : `App homeArticlesList`}>
                            <Paper className={'App subjectArticles'} sx={{backgroundColor: 'primary.article', border: '1px solid black', '&:hover': {
                        border: '1px solid grey',
                        backgroundColor: 'primary.article',
                    }}} elevation={24}><RenderArticle position={index} article={article}/></Paper></li>
                    })
                }
            </ul>
        </div>
        
    )
}

export default Home