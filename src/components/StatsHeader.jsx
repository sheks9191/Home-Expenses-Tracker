import { useLoaderData } from "react-router-dom"
import StatsHeaderComponent from "./StatsHeaderComponent"

const StatsHeader = () => {
  const {expenseCount, incomeCount,expenseTotal,incomeTotal} = useLoaderData()
  // console.log(expenseCount,incomeCount,expenseTotal,incomeTotal)
  return (
    <div className="stats-header">
      <StatsHeaderComponent title='Incomes' total={incomeTotal} count={incomeCount}/>
      <StatsHeaderComponent title='Expenses' total={expenseTotal} count={expenseCount}/>
      <StatsHeaderComponent title='Budget' total='30000.00' expenseTotal={expenseTotal}/>
    </div>
  )
}

export default StatsHeader