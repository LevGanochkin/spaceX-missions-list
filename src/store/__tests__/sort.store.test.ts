import { PayloadAction } from "@reduxjs/toolkit";
import { sortActions, sortReducer, SortState } from "../sort.store";

describe("sortSlice", () => {
  describe("setOrder", () => {
    test("should update descending correctly", () => {
      const initialState: SortState = {
        descending: false,
      };

      const isDescending = true;
      const action: PayloadAction<boolean> = sortActions.setOrder(isDescending);

      const nextState = sortReducer(initialState, action);

      expect(nextState.descending).toBe(isDescending);
    });
  });
});