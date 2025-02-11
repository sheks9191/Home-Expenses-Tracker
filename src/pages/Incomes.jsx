
import { IncomesComponent,PaginationComponent, SearchComponent } from "../components"
import { ItemWrapper } from "../styledComponents/ItemsStyles"
import { customAPI } from "../utils/utils"
import { useLoaderData } from "react-router-dom"

const incomeUrl = '/income'

export const loader = (store) => async ({request}) => {

  const searchParam = new URL(request.url).searchParams.entries();

  const params = Object.fromEntries([...searchParam]);

  const response = await customAPI.get(incomeUrl,{
    params,
    headers:{
      authorization:`Bearer ${store.getState().ui.user.loginUserToken}`
    }
  })

  return response.data
}





const Income = () => {

 const {totalIncomes,noOfPages} = useLoaderData();

  return (
   
    <ItemWrapper>
      <SearchComponent/>
      <div className="item-header">
        <h5>Total: <span className="items-count">{totalIncomes}</span> Income{totalIncomes > 1 &&'s'}</h5>
         {noOfPages > 1 && <PaginationComponent/>}
      </div> 
      <IncomesComponent/>
    </ItemWrapper>
  )
}

export default Income