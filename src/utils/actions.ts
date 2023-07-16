import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { sortActions } from "../store/sort.store"

const actions = {
    ...sortActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}