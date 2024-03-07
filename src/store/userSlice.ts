import { createSlice } from "@reduxjs/toolkit";

const userFromStorage = localStorage.getItem('username') || sessionStorage.getItem('username')

const userSlice = createSlice({
    name: 'loggedUser',
    initialState:{
            name: userFromStorage || '',
            avatar: ''
    },
    reducers:{
        setUser(state, action){
            state.name = action.payload
        },
        setAvatar(state, action){
            state.avatar = action.payload
        }
    }
})

export const {setUser,setAvatar} = userSlice.actions
export default userSlice.reducer