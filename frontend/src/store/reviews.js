import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS';
const LOAD_ONE_REVIEW = 'reviews/LOAD_ONE_REVIEW';
const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const EDIT_REVIEW = 'reviews/EDIT_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';



const loadReviews = (reviews)=>({
    type:LOAD_REVIEWS,
    reviews
});


const loadOneReview = (review)=>({
    type:LOAD_ONE_REVIEW,
    review
});

const createReview = (review)=>({
    type:CREATE_REVIEW,
    review
});

const editReview = (reviewId)=>({
    type:EDIT_REVIEW,
    review
});

const deleteReview = (reviewId)=>({
    type:DELETE_REVIEW,
    reviewId
});



export const fetchAllReviews = () => async (dsipatch)=>{
    const res = await csrfFetch('/api/reviews')

    if(res.ok){
        const data = await res.json()
        dsipatch(loadReviews(data))
        return data
    }
}

export const fetchOneReview = (reviewId) => async (dsipatch)=>{
    const res = await csrfFetch(`/api/reviews/${reviewId}`)

    if(res.ok){
        const data = await res.json()
        dsipatch(loadOneReview(data))
        return data
    }
}

export const fetchCreateReview= (shoeId, userId, comment, rating, image ) => async (dsipatch)=>{
    const res = await csrfFetch(`/api/reviews/new`,{
        method:"POST",
        header:{"Content-Type": "application/json"},
        body:JSON.stringify({shoeId, userId, comment, rating, image })
    })

    if(res.ok){
        const data = await res.json()
        dsipatch(createReview(data))
        return data
    }
}

export const fetchEditReview= (shoeId, userId, comment, rating, image ) => async (dsipatch)=>{
    const res = await csrfFetch(`/api/reviews/new`,{
        method:"PUT",
        header:{"Content-Type": "application/json"},
        body:JSON.stringify({shoeId, userId, comment, rating, image })
    })

    if(res.ok){
        const data = await res.json()
        dsipatch(editReview(data))
        return data
    }
}


export const fetchDeleteReview= (reviewId)=> async(disatch)=>{
    const res = await csrfFetch(`/api/review/${reviewId}`,{
        method:"DELETE"
    })

    if(res.ok){
        const data = res.json()
        dispatch(deleteReview(data))
        return data
    }
    return
}