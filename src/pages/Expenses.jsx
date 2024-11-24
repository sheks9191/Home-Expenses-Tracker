
import { ExpensesComponent, PaginationComponent, SearchComponent} from "../components"
import { ItemWrapper } from "../styledComponents/ItemsStyles"
import { useLoaderData } from "react-router-dom"
import { customAPI } from "../utils/utils"


const expenseUrl = '/expense'

export const loader =(store) => async ({request}) => {
  const searchParam = new URL(request.url).searchParams.entries();
  
  const params = Object.fromEntries([...searchParam]);

  // console.log(param)

    const response = await customAPI.get(expenseUrl,{
      params,
      headers:{
      authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
    }
  })
    
    return response.data
}



const Expenses = () => {
  
 const {totalExpenses,noOfPages} = useLoaderData();
  
  return (
    <ItemWrapper>
      <SearchComponent/>
      <h5>Total: <span className="items-count">{totalExpenses}</span> Expense{totalExpenses > 1 &&'s'}</h5>
      <ExpensesComponent/>
      {noOfPages > 1 && <PaginationComponent/>}
    </ItemWrapper>
  )
}

export default Expenses