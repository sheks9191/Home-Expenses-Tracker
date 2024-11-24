import { useLoaderData } from "react-router-dom"
import LineCharts from "./LineCharts"
import { BsToggle2Off,BsToggle2On } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setToggleStatsChart, setToggleStatsTitle } from "../features/ui/uiSlice";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import BarCharts from "./BarCharts";

const StatsGraphs = () => {
const {incomeStats,expenseStats} = useLoaderData()
const { toggleStatsTitle,toggleStatsChart} = useSelector(store => store.ui)
const dispatch = useDispatch()

 

  return (
    <div>
      <header className="stats-title">
        
        <h4>{toggleStatsTitle?'Expenses' :'Incomes'}</h4>
        <button className={toggleStatsTitle?"toggle-btn btn-color":"toggle-btn"} onClick={() =>dispatch(setToggleStatsTitle()) }>{toggleStatsTitle?<BsToggle2On className="icon"/>:<BsToggle2Off className="icon"/>}</button>
         <span className={toggleStatsTitle?"span-text span-color":"span-text"}>{toggleStatsChart?'BarChart':'LineChart'} <button className="arrow-btn" onClick={() => dispatch(setToggleStatsChart())}>{toggleStatsChart?<FaCaretUp/>:<FaCaretDown/>}</button></span>
         
      </header>
      {toggleStatsTitle?<div className={toggleStatsChart?"close-chart":"open-chart"}><LineCharts data={expenseStats} color='orange'/></div>:<div className={toggleStatsChart?"close-chart":"open-chart"}><LineCharts data={incomeStats} color='greenyellow'/></div>}
      {toggleStatsTitle&&<div className={toggleStatsChart?"open-chart":"close-chart"}>
        <BarCharts data={expenseStats}/>
      </div>}
      {!toggleStatsTitle&&<div className={toggleStatsChart?"open-chart":"close-chart"}>
         <BarCharts data={incomeStats}/>
      </div>}
      
    </div>
  )
}

export default StatsGraphs