import { BudgetExpTrends, MonthlyBudget } from "../components"
import { BudgetWrapper } from "../styledComponents/BudgetStyle"
import { customAPI } from "../utils/utils";


export const loader = (store) => async() => {
 const response = await customAPI.get('/budget',{
    headers:{
      authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
    }
  })
  // console.log(response.data);
  return response.data
}

const Budget = () => {
  return (
    <BudgetWrapper>
      <MonthlyBudget/>
      <BudgetExpTrends/>
    </BudgetWrapper>
  )
}

export default Budget