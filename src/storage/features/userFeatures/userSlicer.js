import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    user: null,
    error: null,
    
}

const userSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    login: {
      reducer: (state) => {},
      prepare: () => {
        //TODO: fetch data here and pass the user to the state
      },
    },
  },
});

