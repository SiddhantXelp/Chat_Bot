import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export type WidgetStates = {
  widgetResponse: WidgetStates;
};

const initialState = {
  propertiesData: [],
};

const widgetSlice = createSlice({
  name: "user1",
  initialState,
  reducers: {
    properties: (state, action) => {
      state.propertiesData = action.payload;
    },
  },
});

export const { properties } = widgetSlice.actions;

export default widgetSlice.reducer;

// export const postWidget = (data) => () => {
//   const config = {
//     method: "post",
//     url: "https://localhost:4011/widget",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data,
//   };

//   console.log("ConfigToday", config);

//   axios(config)
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log("error", error);
//     });
// };

// export const uploadWidget = async (data) => (dispatch) => {
//   console.log(data, "iam token and data from api call");
//   // dispatch(setLoading(true))
//   const response = await uploadWidget();
//   // dispatch(setResponse(response))
//   // dispatch(setLoading(false))
// };
