import axios from 'axios'

const homeGet = axios.create({
    baseURL: "https://nc-news-matts-personal-project.onrender.com"
})

export const fetchArticles = () => {
    return homeGet.get('/api/articles')
    .then(({data}) => {
        //console.log(data)
        return data
    })
}