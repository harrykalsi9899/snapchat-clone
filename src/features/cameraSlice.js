import { createSlice } from "@reduxjs/toolkit";

export const cameraSlice = createSlice({
  name: "camera",
  initialState: {
    cameraImage: null,
  },
  reducers: {
    setCameraImage: (state, action) => {
      state.cameraImage = action.payload;
    },
    resetcameraImage: (state) => {
      state.cameraImage = null;
    },
  },
});

export const { setCameraImage, resetcameraImage } = cameraSlice.actions;

export const selectCameraImage = (state) => state?.camera?.cameraImage;

export default cameraSlice.reducer;
