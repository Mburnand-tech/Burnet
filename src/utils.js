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
    const config = {
        "username" : "grumpy19",
        "body" : comment
    }
    return homeAPI.post(`/api/articles/${article_id}/comments`, config)
    .then(({data}) => {
        return data
    }).catch((err) => {
        console.log(err, "This is my error")
    })
}

export const likeArticle = ( article_id , increment) => {
    const config = {
        inc_votes : increment
    }
    return homeAPI.patch(`/api/articles/${article_id}`, config)
    .then(({data}) => {
        return data
    })
}