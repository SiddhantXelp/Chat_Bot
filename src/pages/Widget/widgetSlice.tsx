import axios from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import index from "../../apis/index"
import { createWidget } from '../../apis/widget.service'
import { AppDispatch } from '../../store/store'

export type WidgetStates = {
  widgetResponse: WidgetStates;
};

export type WidgetState = {
  widgetLoading: boolean;
  widgetResponse: any;
  widgetAPIErrors: any;
}


const initialState: WidgetState = {
    widgetResponse: [],
    widgetLoading: false,
    widgetAPIErrors: []
  
}

const widgetSlice = createSlice({
    name: 'widget',
    initialState,
    reducers: {
      setWidgetResponse: (state, action: PayloadAction<any>) => {
        state.widgetResponse = action.payload;
      },
      setWidgetLoading: (state, action: PayloadAction<boolean>) => {
        state.widgetLoading = action.payload;
      },
      setWidgetAPIErrors: (state, action: PayloadAction<any>) => {
        state.widgetAPIErrors = action.payload;
      },
     
    },
});

export const { setWidgetResponse, setWidgetLoading, setWidgetAPIErrors } = widgetSlice.actions

export default widgetSlice.reducer


export const postWidget = (data: any) => async (dispatch: AppDispatch) => {

  try {
    dispatch(setWidgetLoading(true))
    const createdWidgetResponse = await createWidget(data)
    console.log("PosT", createdWidgetResponse);
    dispatch(setWidgetResponse(createdWidgetResponse))
    dispatch(setWidgetLoading(false))
    
  } catch (error) {
    console.log(error)
    dispatch(setWidgetAPIErrors(error))
    dispatch(setWidgetLoading(false))
  }
 
 

};


// export const postWidget = (data) => () => {
//     const config = {
//       method: "post",
//       url: "http://localhost:4011/widget",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body:JSON.stringify(data)
//     };
  
//     console.log("ConfigToday", config);
  
//     axios(config)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//   };
