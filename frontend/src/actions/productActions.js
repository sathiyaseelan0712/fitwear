import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_RESET,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
} from '../constants/productConstants' //This code is defining a series of constants that represent different action types for managing products in a Redux application
import { update } from 'lodash'



export const listProducts =  (keyword = '') => async(dispatch) => {
    try {
        dispatch({type : PRODUCT_LIST_REQUEST})
        const { data }  = await axios.get(`/api/products?keyword=${keyword}`)
        
        dispatch({type : PRODUCT_LIST_SUCCESS,
                  payload : data,
                 })
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL,
                  payload: 
                  error.response && error.response.data.message
                  ? error.response.data.message 
                  : error.message,
                })
    }

}


export const ListproductbyCg = (Cg) => async (dispatch) =>{
    try {
        dispatch({type : PRODUCT_LIST_REQUEST })
        const {data} = await axios.get(`/api/products/?Cg=${Cg}`)
        dispatch({type : PRODUCT_LIST_SUCCESS , payload : data})
        console.log(data)
        } catch (error) {
            dispatch({type : PRODUCT_LIST_FAIL , 
                      payload : error.response && error.response.data.message 
                      ? error.response.data.message : error.message, })
        
    }

}


// fetches products based on a filter from an API and updates the state 
export const Listproductbyfiter = (filter) => async (dispatch) =>{
    try {
        dispatch({type : PRODUCT_LIST_REQUEST })
        const {data} = await axios.get(`/api/products/?filter=${filter}`)
        dispatch({type : PRODUCT_LIST_SUCCESS , payload : data})
        console.log(data)
        } catch (error) {
            dispatch({type : PRODUCT_LIST_FAIL , 
                      payload : error.response && error.response.data.message 
                      ? error.response.data.message : error.message, })
        
    }

}


// function fetches products within a specified price range from an API and updates the state
export const Listproductbyprice = (from,to) => async (dispatch) =>{
    try {
        dispatch({type : PRODUCT_LIST_REQUEST })
        const {data} = await axios.get(`/api/products/?from=${from}&to=${to}`)
        dispatch({type : PRODUCT_LIST_SUCCESS , payload : data})
        console.log(data)
        } catch (error) {
            dispatch({type : PRODUCT_LIST_FAIL , 
                      payload : error.response && error.response.data.message 
                      ? error.response.data.message : error.message, })
        
    }

}


// fetches details of a specific product by its ID from an API and updates the state
export const listProductDetails =  (id) => async(dispatch) => {
    try {
        dispatch({type : PRODUCT_DETAILS_REQUEST})
        
        const { data }  = await axios.get(`/api/products/${id}`)
        
        dispatch({type : PRODUCT_DETAILS_SUCCESS,
                  payload : data,
                 })
    } catch (error) {
        dispatch({type: PRODUCT_DETAILS_FAIL,
                  payload: 
                  error.response && error.response.data.message
                  ? error.response.data.message 
                  : error.message,
                })
    }

}



// deletes a product by its ID from an API and update the state
export const DeleteProduct = (id) => async(dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_DELETE_REQUEST 
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.delete(`/api/products/${id}`, config) 
        dispatch({
            type: PRODUCT_DELETE_SUCCESS,
                })


       
    } catch (error) {
        dispatch({
            type: PRODUCT_DELETE_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
        
    }
}


// function creates a new product via an API call using an authenticated user's token
export const CreateProduct = () => async(dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REQUEST 
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers:{
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(`/api/products/`,{}, config) 
        dispatch({
            type: PRODUCT_CREATE_SUCCESS,
            payload : data
                })


       
    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
        
    }
}


export const UpdateProduct = (product) => async(dispatch, getState) => {
    console.log(product)

    try {
        dispatch({
            type: PRODUCT_UPDATE_REQUEST 
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers:{
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(`/api/products/${product._id}`,product, config) 
        dispatch({
            type: PRODUCT_UPDATE_SUCCESS,
            payload : data
                })


       
    } catch (error) {
        dispatch({
            type: PRODUCT_UPDATE_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
        
    }
}


// this function fetches product review from the user and update to the state
export const createproductReview = (productId,review) => async(dispatch, getState) => {

    try {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_REQUEST 
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers:{
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.post(`/api/products/${productId}/reviews`,review, config) 
        dispatch({
            type: PRODUCT_CREATE_REVIEW_SUCCESS,
                })


       
    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
        
    }
}