import { createApi } from '@reduxjs/toolkit/query/react'
import storeBaseQuery from "./base.services"

const productApi = createApi({
    reducerPath : "product",
    endpoints : (builder) => {
        getAllProducts : builder.query ({
            query : (args) => {
                return "products"
            }
        })
    }
})

export default productApi
export const {useGetAllProductsQuery} = productApi;