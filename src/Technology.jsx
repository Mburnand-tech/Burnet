import { useEffect , useState } from 'react'

import { fetchTechArticles } from './utils'

import Article from './Article'
import Filter from './Filter'



const Technology = () => {
    const [ loading, setLoading ] = useState(false)
    const [ articles, setArticles ] = useState([])

    useEffect(()=> {
        setLoading(true)
        fetchTechArticles()
        .then((data)=> {
            //console.log(data, "Mine tech")
            setArticles(data)
            setLoading(false)
        })
    }, [])

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

export default Technology