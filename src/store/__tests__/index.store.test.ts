import { configureStore } from "@reduxjs/toolkit";
import { launchApi } from "../spacex.api";
import { sortReducer } from "../sort.store";

describe("store", () => {
  test("should configure store with correct reducers and middleware", () => {
    const store = configureStore({
      reducer: {
        [launchApi.reducerPath]: launchApi.reducer,
        sort: sortReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(launchApi.middleware),
    });

    const state = store.getState();

    expect(state).toHaveProperty("launchApi");
    expect(state).toHaveProperty("sort");
  });
});