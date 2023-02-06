import { useEffect , useState } from 'react'

import { fetchSportArticles } from './utils'

import Article from './Article'
import Filter from './Filter'



const Sports = () => {
    const [ loading, setLoading ] = useState(false)
    const [ articles, setArticles ] = useState([])

    useEffect(()=> {
        setLoading(true)
        fetchSportArticles()
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

export default Sports