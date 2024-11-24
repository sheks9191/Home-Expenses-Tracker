import { StatsGraphs, StatsHeader } from "../components"
import { GraphWrapper } from "../styledComponents/GraphStyles"
import { customAPI } from "../utils/utils"

const statsUrl = '/stats'
export const loader = (store) => async () => {
  

  const response = await customAPI(statsUrl,{
    headers:{
      authorization: `Bearer ${store.getState().ui.user.loginUserToken}`
    }
  })
  
  return response.data
}

const Charts = () => {


  return (
    <GraphWrapper>
      <StatsHeader/>
      <StatsGraphs/>
    </GraphWrapper>
  )
}

export default Charts