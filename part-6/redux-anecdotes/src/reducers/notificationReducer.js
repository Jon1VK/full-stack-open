import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
    clearNotification(state, action) {
      return "";
    },
  },
});

const { setNotification, clearNotification } = notificationSlice.actions;

let timeoutId;

export const createNotification = (message, seconds) => (dispatch) => {
  clearInterval(timeoutId);
  dispatch(setNotification(message));
  timeoutId = setTimeout(() => dispatch(clearNotification()), seconds * 1000);
};

export default notificationSlice.reducer;
