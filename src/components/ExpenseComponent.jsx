
import moment from "moment"
import {useDispatch, useSelector } from "react-redux";
import {deleteExpense } from "../features/expense/expenseSlice";
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import ItemComponent from "./ItemComponent";

const ExpenseComponent = ({expense}) => {
   
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const {expenseType,expenseAmount,createdAt,_id:expenseID} = expense
     const {isLoading} = useSelector(store => store.expense)
    const expenseInitial = expenseType.substring(0,1)
     const date = moment(createdAt).format('MMM Do, YY')
  

     const handleDeleteExpense = () => {
        dispatch(deleteExpense(expenseID))
        navigate(0)
        toast.success('Expense Deleted Successfully')
     }

    

  return (
    <ItemComponent itemType={expenseType}itemAmount={expenseAmount} date={date} itemID={expenseID} handleDelete={handleDeleteExpense} isLoading={isLoading} item='expense' itemInitial={expenseInitial}/>
  )
}

export default ExpenseComponent