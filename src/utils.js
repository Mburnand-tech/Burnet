import axios from 'axios'

const homeAPI = axios.create({
    baseURL: "https://nc-news-matts-personal-project.onrender.com"
})

export const fetchAllArticles = (configObj) => {
    return homeAPI.get('/api/articles', {params: configObj})
    .then(({data}) => {
        //console.log(data, "In Utils")
        return data
    })
}

export const fetchSpecificArticle = (article_id) => {
    //console.log(article_id, "My article_id")
    //console.log("CHECKYYYY")
    return homeAPI.get(`/api/articles/${article_id}`)
    .then(({data}) => {
        //console.log(data, "In Utils")
        return data
    })
}


export const getArticleReviews = (article_id) => {
    return homeAPI.get(`/api/articles/${article_id}/comments`)
    .then(({data}) => {
        //console.log(data, "In Utils")
        return data
    })
}

export const postComment = (article_id, comment) => {
    console.log(article_id, comment)
    const config = {
        username : 'testUserName',
        body : comment
    }
    console.log(config, "Our config")
    return homeAPI.post(`/api/articles/${article_id}/comments`, config)
    .then(({body}) => {
        console.log('CHeck')
        console.log(body[0].body, "In Utils")
        //return data.comment
    })
    
}