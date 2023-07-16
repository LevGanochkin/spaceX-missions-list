import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface SortState {
    descending: boolean 
}

const initialState: SortState ={
    descending: false
}

export const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        setOrder(state, action: PayloadAction<boolean>) {
            state.descending = action.payload;
        }
    }
})

export const [sortActions, sortReducer] = [sortSlice.actions, sortSlice.reducer];
