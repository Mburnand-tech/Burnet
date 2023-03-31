import { useEffect , useState } from 'react'
import { fetchAllArticles } from './utils'
import styles from "./App.module.css"

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

    if (loading) return <p> Loading...</p>

    return (
        <ul>
            {
                articles.map((article) => {
                    return <li key={article.article_id} className={styles.article}><RenderArticle article={article}/></li>
                })
            }
        </ul>
    )
}

export default Home