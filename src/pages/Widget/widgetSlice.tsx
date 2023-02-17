import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    propertiesData: [],
    accomodationSectionData2:[],
    accomodationTableData2:[]
}

const widgetSlice = createSlice({
    name: 'user1',
    initialState,
    reducers: {
      properties: (state, action) => {
        state.propertiesData = action.payload;
      },
      accomodationSection2: (state, action) => {
        state.accomodationSectionData2 = action.payload
      },
      tableFetchData2: (state, action) => {
        state.accomodationTableData2 = action.payload
      },
    
    
    },
})

export const { properties , accomodationSection2, tableFetchData2} = widgetSlice.actions

export default widgetSlice.reducer