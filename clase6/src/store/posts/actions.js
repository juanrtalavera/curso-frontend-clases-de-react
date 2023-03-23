import axios from 'axios'
import {
    GET_POSTS,
    GET_POSTS_OK,
    GET_POSTS_FAIL,

    GET_SINGLE_POST,
    GET_SINGLE_POST_OK,
    GET_SINGLE_POST_FAIL,


} from './actionTypes'

// cuando lanzo la peticion al servidor
export function actionGetPosts(){
    return{
        type: GET_POSTS
    }
}

// accuin para cuando recibo bien los posts
export function actionGetPostsOk(posts){
    return{
        type: GET_POSTS_OK,
        payload: posts
    }
}

// acion para cuando no recibo la peticion
export function actionGetPostsFail(error){
    return{
        type: GET_POSTS_FAIL,
        payload: error
    }
}

export function getPosts(){
    return async (dispatch)=>{
        // empiezo a pedir los posts a la API
        dispatch(actionGetPosts())
        
        try{
            const response = axios.get(`https://jsonplaceholder.typicode.com/posts`)
            dispatch(actionGetPostsOk(response.data)) 
        }catch(error){
            dispatch(actionGetPostsFail(error))
        }
    }
}

// SINGLE POSTS
// SINGLE POSTS
// SINGLE POSTS
// SINGLE POSTS
// SINGLE POSTS
// SINGLE POSTS


export function actionGetSinglePost(postId){
    return{
        type: GET_SINGLE_POST,
        payload: postId,
    }
}


export function actionGetSinglePostOk(posts){
    return{
        type: GET_SINGLE_POST_OK,
        payload: posts
    }
}

export function actionGetSinglePostFail(error){
    return{
        type: GET_SINGLE_POST_FAIL,
        payload: error,
    }
}

export function getSinglePost(postId){
    return async (dispatch)=>{
        // empiezo a pedir los posts a la API
        dispatch(actionGetSinglePost(postId))
        
        try{
            const response = axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            dispatch(actionGetSinglePostOk(response.data)) 
        }catch(error){
            dispatch(actionGetSinglePostFail(error))
        }
    }
}