import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  user: null,
  error: null,
};

const loginLogoutSlice = createSlice({
  name: "loginLogoutSlice",
  initialState,
  reducers: {
    login: {
      reducer: (state, action) => {
        state = action.payload;
        return state; // always return new state it is important
      },
      prepare: (response) => {
        /*response structure {
          success: true,
          data : {
            user: 'user',
            about: 'about'
          }
        }
        */
        return {
          payload: {
            isLoading: false,
            user: response.data.user,
            error: null,
            
          },
        };
      },
    },

    loading: {
      reducer: (state, action) => {
        state.isLoading = true;
        return state;
      },
    },

    error: {
      reducer: (state, action) => {
        state = action.payload;
        return state;
      },

      prepare: (error) => {
        return {
          payload: {
            isLoading: false,
            user: null,
            error: error,
          },
        };
      },
    },
  },
});

export default loginLogoutSlice.reducer;

export const { login, loading, error } = loginLogoutSlice.actions;
