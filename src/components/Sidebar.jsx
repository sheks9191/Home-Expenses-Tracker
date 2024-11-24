import { SidebarWrapper } from "../styledComponents/SidebarStyles"
import { pageIcons } from "../utils/utils"
import PageIcon from "./PageIcon"
import useDateUpdate from "./useDateUpdate";



const Sidebar = () => {
   const {timeNum,timeText,formatDate} = useDateUpdate()
  
  return (
    <SidebarWrapper>
      
      <div className="app-time">
          <div className="time">
            <span className="num">{timeNum}</span>
            <span className="text">{timeText}</span>
          </div>
          <span className="date">{formatDate}</span>
      </div>

      <div className="sidebar-content">
        {pageIcons.map(pageIcon => <PageIcon key={pageIcon.id} pageIcon={pageIcon} />
        )}
      </div>
    </SidebarWrapper>
  )
}

export default Sidebar