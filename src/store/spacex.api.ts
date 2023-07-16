import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { ILaunch, ServerResponse } from "../models/models"
export const launchApi = createApi({
    reducerPath: "spacexApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.spacexdata.com"
    }),
    endpoints: build => ({
        getLaunch: build.query<ILaunch[], string>({
            query: (search: string) => ({
                url: `v5/${search}`,
                method: "POST",
                body: {
                    "query": {
                        "date_utc": {
                            "$gte": "2015-01-00T00:00:00.000Z",
                            "$lte": "2019-12-31T00:00:00.000Z"
                        },
                        "success": "true",
                        "details": {$ne: null}
                    },
                    "options": {
                        "limit": "200",
                        "populate": [
                            {
                                "path": "rocket",
                                "select": {
                                    "flickr_images": 1
                                }
                            }
                        ]
                    },
                }
            }),
            transformResponse: (response: ServerResponse<ILaunch>) => response.docs,
        })
    })
})

export const {useGetLaunchQuery} = launchApi