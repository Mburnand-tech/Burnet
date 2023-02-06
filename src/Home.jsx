import { useEffect , useState } from 'react'
import { fetchArticles } from './utils'

import Article from './Article'



const Home = () => {
    const [ loading, setLoading ] = useState(false)
    const [ articles, setArticles ] = useState([])

    useEffect(()=> {
        setLoading(true)
        fetchArticles()
        .then((data)=> {
            //console.log(data, "Mine")
            setArticles(data)
            setLoading(false)
        })
    }, [])

    //console.log(articles)
    return (
        //(loading) ? <p> page loading</p>:
        <ul>
            {
                articles.map((article) => {
                    return <li><Article article={article}/></li>
                })
            }
        </ul>
    )
}

export default Home