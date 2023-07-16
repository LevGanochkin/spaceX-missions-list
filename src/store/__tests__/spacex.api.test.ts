import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILaunch, ServerResponse } from "../../models/models";
import { launchApi, useGetLaunchQuery } from "../spacex.api";

describe("launchApi", () => {
  test("should return expected launch data", async () => {
    // Mock the fetchBaseQuery function
    const mockBaseQuery = jest.fn();
    const mockResponse: ServerResponse<ILaunch> = {
      docs: [
            { 
                flight_number: 1,
                name: "Launch 1", 
                success: true, 
                details: "some details",
                date_utc: "2017-01-01T00:00:00.000Z",
                rocket: {
                    flickr_images: ["png", "png2"],
                    id: "5e9d0d95eda69973a809d1ec"
                }
            }, 
            { 
                flight_number: 2,
                name: "Launch 2", 
                success: true, 
                details: "some other details",
                date_utc: "2019-01-01T00:00:00.000Z",
                rocket: {
                    flickr_images: ["png", "png2"],
                    id: "5e9d0d95eda69973a809d1ec"
                }
            }, 
        ],
    };
    mockBaseQuery.mockResolvedValue(mockResponse);

    // Create a test instance of the API
    const api = createApi({
      reducerPath: "spacexApi",
      baseQuery: mockBaseQuery,
      endpoints: (build) => ({
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
          transformResponse: (response: ServerResponse<ILaunch>) =>
            response.docs,
        }),
      }),
    });

    // Mock the useGetLaunchQuery hook
    jest.spyOn(launchApi, "useGetLaunchQuery").mockReturnValue({
        data: mockResponse.docs,
        isLoading: false,
        isError: false,
        refetch: jest.fn(),
      });
  
      // Perform the API request
      const { data } = useGetLaunchQuery("search");
  
      // Verify the response
      expect(data).toEqual(mockResponse.docs);
    });
});