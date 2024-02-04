import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
  user: {username: 'Success'},
  theme: 'winter'
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login')
    },
    logoutUser: (state, action) => {
      console.log('logout')
    },
    toggleTheme: (state, action) => {
      console.log('current theme')
    },
  },
})

export const {loginUser, logoutUser, toggleTheme} = userSlice.actions
export default userSlice.reducer