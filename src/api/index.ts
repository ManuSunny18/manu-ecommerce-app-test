import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react'


//"https://fakestoreapi.com/products"
const apiEndPoint = "https://fakestoreapi.com"
const baseQuery = ""
const apiService = createApi({
    reducerPath:'apiService',
    baseQuery:fetchBaseQuery({
        baseUrl:apiEndPoint,
        prepareHeaders:(headers,{getState})=>{
            //modify headers here
            //authoken
            return headers
        }
    }),
    keepUnusedDataFor:10,
    tagTypes:['store'],
    endpoints:(builder) =>({
        getStoreListing: builder.query({
            query:(page = 0)=> `/products?offset=${page * 10}&limit=10`
        })
    })
})
//console.log(apiService,"apiService")
export const {
    useGetStoreListingQuery
} = apiService
export default apiService