import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const covidRtk = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.covidtracking.com/v1/' }),
    reducerPath: 'covidapi',
    endpoints: (builder) => ({
        getAllInfo: builder.query({
            query: ()=> 'states/info.json'
        })
    })
});

export const {useGetAllInfoQuery} = covidRtk