import axios from 'axios'

const homeGet = axios.create({
    baseURL: "https://nc-news-matts-personal-project.onrender.com"
})

export const fetchAllArticles = () => {
    return homeGet.get('/api/articles')
    .then(({data}) => {
        //console.log(data)
        return data
    })
}
export const fetchTechArticles = () => {
    return homeGet.get('/api/articles', {params:{topic : 'coding'}})
    .then(({data}) => {
        //console.log(data)
        return data
    })
}

export const fetchSportArticles = () => {
    return homeGet.get('/api/articles', {params:{topic : 'football'}})
    .then(({data}) => {
        //console.log(data)
        return data
    })
}

export const fetchLifeArticles = () => {
    return homeGet.get('/api/articles', {params:{topic : 'cooking'}})
    .then(({data}) => {
        //console.log(data)
        return data
    })
}