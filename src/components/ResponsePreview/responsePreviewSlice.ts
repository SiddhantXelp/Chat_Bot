// import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// import { AppDispatch } from '../../store/store'
// import { createResponse } from '../../apis/response.service'

// export type responseState = {
//   chatBotPreview: any;
// }


// const initialState: responseState = {
//     chatBotPreview: [],
  
// }

// const responseSlice = createSlice({
//     name: 'chatBotPreviewRequest',
//     initialState,
//     reducers: {
//       setChatBotPreview: (state, action: PayloadAction<any>) => {
//         state.chatBotPreview = action.payload;
//       },
     
//     },
//   },
// );

// export const { setChatBotPreview} = responseSlice.actions

// export default responseSlice.reducer


// export const getResponse = (newData: any) => async (dispatch: any) => {

//   try {
//     const createdResponse = await axios.get
//     console.log("POSTRES", createdResponse);
//     dispatch(setFormResponse(createdResponse))
    
//   } catch (error) {
//     console.log(error)
//   }
 
 

// };
