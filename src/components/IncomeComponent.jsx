import moment from "moment"
import { useDispatch, useSelector } from "react-redux";
import { deleteIncome } from "../features/income/incomeSlice";
import { useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import ItemComponent from "./ItemComponent";


const IncomeComponent = ({income}) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

     const {incomeType,incomeAmount,createdAt,_id:incomeID} = income
     const {isLoading} = useSelector(store => store.income)
    const incomeInitial = incomeType.substring(0,1)
     const date = moment(createdAt).format('MMM Do, YY')
  

     const handleDeleteIncome = () => {
        dispatch(deleteIncome(incomeID))
        navigate(0)
        toast.success('Income Deleted Successfully')
     }
  return (
    <ItemComponent itemType={incomeType} itemAmount={incomeAmount} date={date} itemID={incomeID} handleDelete={handleDeleteIncome} isLoading={isLoading} item='income' itemInitial={incomeInitial}/>
  )
}

export default IncomeComponent