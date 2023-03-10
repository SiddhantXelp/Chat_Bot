import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { editResponse } from '../../apis/responseEdit.service'
import { AppDispatch } from '../../store/store'


export type responseEditState = {
  editRes: any;
}


const initialState: responseEditState = {
  editRes: {},
  
}

const responseEditSlice = createSlice({
    name: 'responseEditRequest',
    initialState,
    reducers: {
      setEditResponse: (state, action: PayloadAction<any>) => {
        state.editRes = action.payload;
      },
     
    },
  },
);

export const { setEditResponse} = responseEditSlice.actions

export default responseEditSlice.reducer


export const putResponse = (updatedData: any) => async (dispatch: any) => {

  try {
    const editedResponse = await editResponse(updatedData)
    console.log("POSTRES", editedResponse);
    dispatch(setEditResponse(editedResponse))
    
  } catch (error) {
    console.log(error)
  }
 
 

};
