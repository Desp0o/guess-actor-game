import { createSlice } from "@reduxjs/toolkit";

const userFromStorage = localStorage.getItem('user') || sessionStorage.getItem('user')

const userSlice = createSlice({
    name: 'loggedUser',
    initialState:{
        name: userFromStorage || ''
    },
    reducers:{
        setUser(state, action){
            state.name = action.payload
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer