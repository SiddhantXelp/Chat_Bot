import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createResponse } from '../../apis/response.service'
import { AppDispatch } from '../../store/store'


export type responseState = {
  formRes: any;
  // description:string; 
  // selectType:string
}


const initialState: responseState = {
  formRes: [],
  // description: '',
  // selectType: ''
  
}

const responseSlice = createSlice({
    name: 'responseRequest',
    initialState,
    reducers: {
      setFormResponse: (state, action: PayloadAction<any>) => {
        state.formRes = action.payload;
      },
      // setResponseDescription: (state, action: PayloadAction<string>) => {
      //   state.description = action.payload;
      // },
      // setResponseType: (state, action: PayloadAction<string>) => {
      //   state.selectType = action.payload;
      // },
     
    },
  },
);

export const { setFormResponse} = responseSlice.actions

export default responseSlice.reducer


export const postResponse = (newData: any) => async (dispatch: any) => {

  try {
    const createdResponse = await createResponse(newData)
    console.log("POSTRES", createdResponse);
    dispatch(setFormResponse(createdResponse))
    
  } catch (error) {
    console.log(error)
  }
 
 

};
