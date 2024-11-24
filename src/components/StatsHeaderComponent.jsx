import { currencyUpdate } from "../utils/utils"

const StatsHeaderComponent = ({title,count, total,expenseTotal}) => {
    const balance = (total - expenseTotal)
    
  return (
    <section>
        <h5>{title}</h5>
        <span>{currencyUpdate(total)}</span>
        {title !== 'Budget'&&<span className="count">{count}</span>}
        {title === 'Budget'&&<span className={balance <= 0 ? 'bal negative':'bal positive'}>Bal: {currencyUpdate(balance)}</span>}
    </section>
  )
}

export default StatsHeaderComponent