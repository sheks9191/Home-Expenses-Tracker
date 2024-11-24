import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { customAPI } from "../../utils/utils";
import { logoutUser } from "../ui/uiSlice";




const defaultState = {
    isLoading:false,
    incomeType:'',
    incomeAmount:'',
   
}



export const addIncome = createAsyncThunk('/income/addIncome',async(income,thunkAPI) => {
    try {
        const response = await customAPI.post('/income',income,{
            headers:{
                authorization:`Bearer ${thunkAPI.getState().ui.user.loginUserToken}`
            }
        })
       
        return response.data
    } catch (error) {
        if(error.response.status === 401){
          thunkAPI.dispatch(logoutUser());
        }
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
})


export const deleteIncome = createAsyncThunk('/income/deleteIncome', async(incomeID,thunkAPI) =>{
     try {
        const response = await customAPI.delete(`/income/${incomeID}`, {
            headers:{
                authorization:`Bearer ${thunkAPI.getState().ui.user.loginUserToken}`
            }
        })
        return response.data.msg
     } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg) 
     }
})


const incomeSlice = createSlice({
    name:'income',
    initialState:defaultState,
    reducers:{
        handleChange:(state,{payload:{name,value}}) => {
            state.incomeType = name,
            state.incomeAmount = value
        }
    },

    extraReducers:(builder) => {
            builder.addCase(addIncome.pending,(state) => {
            state.isLoading = true;
        })
        .addCase(addIncome.fulfilled,(state) => {
            state.isLoading = false;
            state.incomeAmount='';
            toast.success('Income Added Successfully')
        })
        .addCase(addIncome.rejected,(state,{payload}) => {
             state.isLoading = false;
             toast.error(payload);
        })
        .addCase(deleteIncome.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteIncome.fulfilled, (state)=> {
            state.isLoading = false;
            toast.success('Income Deleted Successfully')
        })
        .addCase(deleteIncome.rejected,(state,{payload}) => {
           state.isLoading = false
           toast.error(payload)
        })
    }
})






export const {handleChange} = incomeSlice.actions;
export default incomeSlice.reducer;