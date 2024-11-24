import { useDispatch, useSelector } from "react-redux"
import { setInputTextId } from "../features/ui/uiSlice";
import { addIncome, handleChange } from "../features/income/incomeSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AddInputComponent from "./AddInputComponent";

const Income = ({incomeItem}) => {
  
   const navigate = useNavigate()
  const {inputTextId} = useSelector(store => store.ui);
   const {incomeType,incomeAmount, isLoading} = useSelector(store => store.income)
  const dispatch = useDispatch();
  const {id,income} = incomeItem
  
  const handleIncomeInput = (e) => {
    dispatch(handleChange({name:e.target.name,value:e.target.value}))

    
  }

  
  const handleTextID = () => {
     dispatch(setInputTextId({textID:id}))
  }


    const handleAddIncome = (e) => {
     e.preventDefault()
     const amount = +incomeAmount
     if(!amount || amount < 0){
      toast.error('Please enter valid amount')
      return
     }

     dispatch(addIncome({incomeType,incomeAmount:amount}))
     dispatch(setInputTextId({textID:id}))
     navigate(0)
     toast.success('Income Added Successfully')
    
     
  }


  return (
  
  
  <AddInputComponent handleAdd={handleAddIncome} handleInput={handleIncomeInput} item ='income' handleTextID={handleTextID} inputTextId={inputTextId} id={id} itemName={income} itemAmount={incomeAmount} isLoading={isLoading}/> 
  
  )
}

export default Income