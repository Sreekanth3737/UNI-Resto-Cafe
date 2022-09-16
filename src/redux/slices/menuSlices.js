import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
const API_URL='https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099'

//fetch details
export const fetchMenuItemsAction=createAsyncThunk(
    'menuItems/getLists',async()=>{
        return axios.get(`https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099`).then((res)=>
        res.data
        )
    }
);




    


export const menuSlice=createSlice({
    name:"menuItems",
    initialState:{
        menuList:[],
        status:null
    },
    

    extraReducers:{
      [fetchMenuItemsAction.pending]:(state,action)=>{
                state.status='loading';

        },
        [fetchMenuItemsAction.fulfilled]:(state,{payload})=>{
            state.menuList=payload
            state.status='success'
        },
        [fetchMenuItemsAction.rejected]:(state,action)=>{
            state.status='failed'
        }
       
    }
})

export default menuSlice.reducer