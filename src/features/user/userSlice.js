import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
  selectedUser: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUsers: (state, action) => {
      state.userList = action.payload;
      state.selectedUser = {};
    },
    fetchUserById: (state, action) => {
      state.selectedUser = state.userList.find(
        (user) => user.id === action.payload
      );
    },
    addUser: (state, action) => {
      state.userList.push(action.payload);
    },
    updateUser: (state, action) => {
      state.userList = state.userList.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        } else {
          return user;
        }
      });
    },
    deleteUser: (state, action) => {
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload
      );
    },
  },
});

export const { fetchUsers, fetchUserById, addUser, updateUser, deleteUser } =
  userSlice.actions;

export default userSlice.reducer;
