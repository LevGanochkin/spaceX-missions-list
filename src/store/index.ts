import { configureStore } from "@reduxjs/toolkit";
import { launchApi } from "./spacex.api";
import { sortReducer } from "./sort.store";

export const store = configureStore({
    reducer: {
        [launchApi.reducerPath]: launchApi.reducer,
        sort: sortReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(launchApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>