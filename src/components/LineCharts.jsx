import moment from 'moment';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const LineCharts = ({data,color}) => {

   if(data.length === 0){
    
    return ( 
    <div className="empty-list">
         <h5>Data Is Empty</h5>
    </div>
     )
  }
  
 
//  data = data.map(item=> {
//     const {totalAmount,count,date} = item
//     const formatDate = moment(date).format('MMM Do')
//     return {totalAmount, count, date:formatDate}
//   })

  return (
    

      <ResponsiveContainer width="100%" height={300}>
      <LineChart width={300} height={100} data={data} className='line-chart'>
         <Line type="monotone" dataKey="totalAmount" stroke={color}/>
          {data.length > 0 && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip/>
      </LineChart>
    </ResponsiveContainer>
  
 
  )
}

export default LineCharts