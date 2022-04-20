import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const storeBaseQuery = fetchBaseQuery({
    baseUrl : "https://fakestoreapi.com/"
})


export default {storeBaseQuery}
