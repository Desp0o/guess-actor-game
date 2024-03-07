import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'loggedUser',
    initialState:{
            name: '',
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