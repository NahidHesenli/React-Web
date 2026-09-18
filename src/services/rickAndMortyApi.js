import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const RickMortyapi=createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl:'https://rickandmortyapi.com/api',
        prepareHeaders:(headers)=>{
            headers.set("Content-Type","application/json")
            return headers
        }
    }),
    tagTypes:['Characters'],
    endpoints:(builder)=>({
        getAllCharacters:builder.query({
            query:()=>'/character',
            providesTags:['Characters']
        }),
        getCharacterById:builder.query({
            query: (id) => `/character/${id}`,
        providesTags:(result,error,id)=>[{type:'Characters',id}]
        })
    })
})

export const {useGetAllCharactersQuery, useGetCharacterByIdQuery}=RickMortyapi