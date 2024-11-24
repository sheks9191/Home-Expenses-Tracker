import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { customAPI } from "../../utils/utils";
import { logoutUser } from "../ui/uiSlice";

const defaultState = {
    isLoading:false,
    expenseType:'',
    expenseAmount:'',
    
}

export const addExpense = createAsyncThunk('/expense/addExpense',async(expense,thunkAPI) => {
    // console.log(thunkAPI.getState())
    try {
        const response = await customAPI.post('/expense',expense,{
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


export const deleteExpense = createAsyncThunk('/expense/deleteExpense', async(expenseID,thunkAPI) =>{
     try {
        const response = await customAPI.delete(`/expense/${expenseID}`, {
            headers:{
                authorization:`Bearer ${thunkAPI.getState().ui.user.loginUserToken}`
            }
        })
        return response.data.msg
     } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg) 
     }
})



const expenseSlice = createSlice({
    name:'expense',
    initialState:defaultState,
    reducers:{
       handleChange:(state,{payload:{name,value}}) => {
        state.expenseType = name,
        state.expenseAmount = value      
       },

    },

    extraReducers:(builder) => {
        builder.addCase(addExpense.pending,(state) => {
            state.isLoading = true;
        })
        .addCase(addExpense.fulfilled,(state) => {
            state.isLoading = false;
            state.expenseAmount='';
            toast.success('Expense Added Successfully')
        })
        .addCase(addExpense.rejected,(state,{payload}) => {
             state.isLoading = false;
             toast.error(payload);
        })
        .addCase(deleteExpense.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteExpense.fulfilled, (state)=> {
            state.isLoading = false;
            toast.success('Expense Deleted Successfully')
        })
        .addCase(deleteExpense.rejected,(state,{payload}) => {
           state.isLoading = false
           toast.error(payload)
        })
    }
})

export const {handleChange} = expenseSlice.actions;
export default expenseSlice.reducer;