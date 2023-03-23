import {
    GET_POSTS,
    GET_POSTS_OK,
    GET_POSTS_FAIL,

    GET_SINGLE_POST,
    GET_SINGLE_POST_OK,
    GET_SINGLE_POST_FAIL,
} from './actionTypes'

const initialState = {
    posts: [],
    loadingPosts: false,
    post: {},
    loadingSinglePost: false,
    error: {
        message: ""
    }
}

export default function PostsReducer(state = initialState, action){
    switch(action.type){
        case GET_POSTS:
            state = {...state, loadingPosts: true}
            break
        
        case GET_POSTS_OK:
            // aqui en action payload ya tenemos los posts que llegaron de la API
            state = {...state, loadingPosts: false, posts: action.payload}
            break
        
        case GET_POSTS_FAIL:
            state = {...state, loadingPosts: false, posts: [], error: {message: action.payload}}
            break
        
// SINGLE POST
// SINGLE POST
// SINGLE POST
// SINGLE POST
// SINGLE POST
// SINGLE POST

        case GET_SINGLE_POST:
            state = {...state, loadingSinglePost: true}
            break
        
        case GET_SINGLE_POST_OK:
            state = {...state, loadingSinglePost: false, post: action.payload}
            break
        
        case GET_SINGLE_POST_FAIL:
            state = {...state, loadingSinglePosts: false, post: {}, error: {message: action.payload}}
            break

        default:
            break
                
    }
}

