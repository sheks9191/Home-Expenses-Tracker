import { useLoaderData } from "react-router-dom"
import BudgetExp from "./BudgetExp"

const BudgetExpTrends = () => {
  const {allBudget,expenseObj} = useLoaderData()

  
  const expenseObjKeys = Object.keys(expenseObj)
 
  const budgetsArray = allBudget.map(budget => {
    const {date,month} = budget
   
    if(expenseObjKeys.includes(`${date.substring(0,4)}-${month}`)){
      budget.monthlyExpenses = (expenseObj[`${date.substring(0,4)}-${month}`]);
    }else {
      budget.monthlyExpenses = 0
    }
    return budget 
  })

  
  return (
    <div>
      <h4>Budget Trends</h4>

       <div className="monthly-budgets">
        {budgetsArray.length > 0 ? budgetsArray.map(budget => {
          return <BudgetExp key={budget._id} budget={budget}/>
        }) : <span>Budget List Is Empty</span>}
       </div>


    </div>
  )
}

export default BudgetExpTrends