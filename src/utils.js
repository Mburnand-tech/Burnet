import axios from 'axios'


const homeAPI = axios.create({
    baseURL: 'http://ec2-18-130-187-9.eu-west-2.compute.amazonaws.com',
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

export const fetchAllArticles = (configObj) => {
    //console.log(configObj, "On other side")
    return homeAPI.get('/api/articles', {params: configObj})
    //return homeAPI.get('/api/articles', configObj)
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

export const postComment = (article_id, comment, user) => {
    const config = {
        "username" : user,
        "body" : comment
    }
    return homeAPI.post(`/api/articles/${article_id}/comments`, config)
    .then(({data}) => {
        return data
    })
}


export const likeArticle = ( article_id , increment) => {
    const config = {
        inc_votes : increment
    }
    return homeAPI.patch(`/api/articles/${article_id}`, config)
}

export const likeComment = ( comment_id, increment ) => {
    const config = {
        inc_votes : increment
    }
    return homeAPI.patch(`/api/comments/${comment_id}`, config)  
}


export const getUser = (user_name) => {
    return homeAPI.get(`/api/users/${user_name}`)
    .then(({data}) => {
        return data
    })
}

export const deleteComment = (comment_id) => {
    return homeAPI.delete(`/api/comments/${comment_id}`)
}
