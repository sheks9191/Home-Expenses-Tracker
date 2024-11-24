import { useDispatch, useSelector } from "react-redux"
import { setInputTextId } from "../features/ui/uiSlice";
import { addExpense, handleChange } from "../features/expense/expenseSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AddInputComponent from "./AddInputComponent";


const Expense = ({expenseItem}) => {
  const navigate = useNavigate()
  const {inputTextId} = useSelector(store => store.ui);
  const {expenseType,expenseAmount, isLoading} = useSelector(store => store.expense)
  const dispatch = useDispatch();
  const {id, expense} = expenseItem

  const handleExpenseInput = (e) => {
    dispatch(handleChange({name:e.target.name,value:e.target.value}))

    
  }

  const handleTextID = () => {
     dispatch(setInputTextId({textID:id}))
  }

  const handleAddExpense = (e) => {
     e.preventDefault()
     const amount = +expenseAmount
     if(!amount || amount < 0){
      toast.error('Please enter valid amount')
      return
     }

     dispatch(addExpense({expenseType,expenseAmount:amount}))
     dispatch(setInputTextId({textID:id}))
     navigate(0)
     toast.success('Expense Added Successfully')
    
     
  }

 
  return (
    <AddInputComponent handleAdd={handleAddExpense} handleInput={handleExpenseInput} item='expense' handleTextID={handleTextID} inputTextId={inputTextId} id={id} itemName={expense} itemAmount={expenseAmount} isLoading={isLoading}/>
  )
}

export default Expense