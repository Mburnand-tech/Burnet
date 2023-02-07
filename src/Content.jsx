import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'

import { fetchAllArticles } from './utils'

import Article from './Article'
import Filter from './Filter'



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
            return <li><Article article={article}/></li>
        })
    }
</ul>
 )
}

export default Content