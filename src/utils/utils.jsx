import { FaMoneyBillWave,FaRegChartBar } from "react-icons/fa";
import { GiExpense, GiTakeMyMoney  } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { MdSummarize } from "react-icons/md";
import { nanoid } from "nanoid";
import axios from "axios";
import { useSelector } from "react-redux";


const appUrl = 'http://localhost:3000/api/v2';

export const customAPI = axios.create({
  baseURL:appUrl,
})
export const pageIcons = [
    {
      id:nanoid(),
      icon:<FaRegChartBar/>,
      text:'Charts',
      link:'/'
    },

      {
      id:nanoid(),
      icon:<FaMoneyBillWave/>,
      text:'Incomes',
      link:'/incomes',
      
    },

      {
      id:nanoid(),
      icon:<GiTakeMyMoney/>,
      text:'Budget',
      link:'/budget'
    },

      {
      id:nanoid(),
      icon:<GiExpense/>,
      text:'Expenses',
      link:'/expenses',
    },

      {
      id:nanoid(),
      icon:<MdSummarize/>,
      text:'Summary',
      link:'/summary'
    },

      {
      id:nanoid(),
      icon:<IoMdSettings/>,
      text:'Settings',
      link:'/settings'
    },
]

export const incomeArray = [
  {
    id:nanoid(),
    income:'Salary'
  },

  {
    id:nanoid(),
    income:'Wages'
  },

  {
    id:nanoid(),
    income:'Investments'
  },

  {
    id:nanoid(),
    income:'Others'
  },
]

export const expensesArray = [
  {
    id:nanoid(),
    expense:'Food'
  },
    {
    id:nanoid(),
    expense:'Housing'
  },
    {
    id:nanoid(),
    expense:'Clothing'
  },
    {
    id:nanoid(),
    expense:'Rent'
  },
    {
    id:nanoid(),
    expense:'Electricity'
  },
    {
    id:nanoid(),
    expense:'Gas'
  },
    {
    id:nanoid(),
    expense:'Water'
  },
    {
    id:nanoid(),
    expense:'Transportation'
  },
    {
    id:nanoid(),
    expense:'Education'
  },
    {
    id:nanoid(),
    expense:'Health'
  },
    {
    id:nanoid(),
    expense:'Entertainment'
  },
    {
    id:nanoid(),
    expense:'Beauty'
  },
    {
    id:nanoid(),
    expense:'Electronics'
  },
    {
    id:nanoid(),
    expense:'Cigarette'
  },
    {
    id:nanoid(),
    expense:'Repairs'
  },
    {
    id:nanoid(),
    expense:'Pet'
  },
    {
    id:nanoid(),
    expense:'Gift'
  },
    {
    id:nanoid(),
    expense:'Donation'
  },
    {
    id:nanoid(),
    expense:'Baby'
  },
    {
    id:nanoid(),
    expense:'Vegetables'
  },
    {
    id:nanoid(),
    expense:'Telephone'
  },
    {
    id:nanoid(),
    expense:'Sport'
  },
    {
    id:nanoid(),
    expense:'Car'
  },
    {
    id:nanoid(),
    expense:'Travel'
  },
    {
    id:nanoid(),
    expense:'Lottery'
  },
    {
    id:nanoid(),
    expense:'Fruits'
  },
    {
    id:nanoid(),
    expense:'Shopping'
  },
    {
    id:nanoid(),
    expense:'Social'
  },
    {
    id:nanoid(),
    expense:'Wine'
  },
    {
    id:nanoid(),
    expense:'Snacks'
  },
    {
    id:nanoid(),
    expense:'Others'
  },
]

export const currencyList = [

  {
     symbol:'en-NG',
     currency:'NGN',
  },

   {
     symbol:'en-GB',
     currency:'GBP',
  },
   {
     symbol:'en-IE',
     currency:'EUR',
  },
   {
     symbol:'ja-JP',
     currency:'JPY',
  },
   {
     symbol:'en-US',
     currency:'USD',
  },

]


export const currencyUpdate = (price) => {

const {currencyValue} = useSelector(store => store.ui)
const [symbol,currency] = currencyValue.split(' ')

  const currencyUnit = new Intl.NumberFormat(symbol,{
    style:'currency',
    currency
  }).format((price))
 
  return currencyUnit
}