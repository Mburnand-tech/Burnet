import { useEffect , useState } from 'react'
import { fetchAllArticles } from './utils'

import Article from './Article'



const Home = () => {
    const [ loading, setLoading ] = useState(false)
    const [ articles, setArticles ] = useState([])

    useEffect(()=> {
        setLoading(true)
        fetchAllArticles()
        .then((data)=> {
            //console.log(data, "Mine")
            setArticles(data)
            setLoading(false)
        })
    }, [])
    // Why is if I type 'articles in array above it creates an infinite loop



    //console.log(articles)
    if (loading) return <p> Loading...</p>

    return (
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