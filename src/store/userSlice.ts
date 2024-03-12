import { createSlice } from "@reduxjs/toolkit";

const userFromStorage = localStorage.getItem('username') || sessionStorage.getItem('username')
const avatarFromStorage = localStorage.getItem("userAvatar") || sessionStorage.getItem("userAvatar")
console.log(avatarFromStorage);


const userSlice = createSlice({
    name: 'loggedUser',
    initialState:{
            name: userFromStorage || '',
            avatar: '' || avatarFromStorage
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