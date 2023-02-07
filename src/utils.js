import axios from 'axios'

const homeGet = axios.create({
    baseURL: "https://nc-news-matts-personal-project.onrender.com"
})

export const fetchAllArticles = (configObj) => {
    return homeGet.get('/api/articles' , {params: configObj})
    .then(({data}) => {
        //console.log(data, "In Utils")
        return data
    })
}
