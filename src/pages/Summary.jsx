import { useLoaderData } from "react-router-dom"
import { SummaryWrapper } from "../styledComponents/SummaryStyles"
import { customAPI } from "../utils/utils"
import SummaryComponent from "../components/SummaryComponent"

const statsUrl = '/stats'
export const loader = (store) => async () => {
  

  const response = await customAPI(statsUrl,{
    headers:{
      authorization: `Bearer ${store.getState().ui.user.loginUserToken}`
    }
  })
  
  return response.data
}


const Summary = () => {
  const {incomeSummary, expenseSummary} = useLoaderData()
 
  if((incomeSummary.length + expenseSummary.length) === 0){
    
    return ( 
    <div className="empty-list ">
         <h5>Record Is Empty</h5>
    </div>
     )
  }
  return (
    <SummaryWrapper>
      <SummaryComponent summaryItems={incomeSummary} title='income records'/>
      <SummaryComponent summaryItems={expenseSummary} title='expense records'/>
    </SummaryWrapper>
  )
}

export default Summary