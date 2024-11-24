import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { AppLayout, Budget, Charts, EditExpensePage,EditIncomePage, Error, Expenses, Incomes, Landing, Login, ProtectedRoutes, Register, Settings, Summary } from "./pages"
import { action as registerAction } from "./pages/Register"
import { action as loginAction } from "./pages/Login"
import { action as editExpenseAction } from "./pages/EditExpensePage"
import { action as editIncomeAction } from "./pages/EditIncomePage"
import { action as settingsAction } from "./pages/Settings"
import { loader as expenseLoader } from "./pages/Expenses"
import { loader as incomeLoader } from "./pages/Incomes"
import { loader as editExpenseLoader } from "./pages/EditExpensePage"
import { loader as editIncomeLoader } from "./pages/EditIncomePage"
import { loader as chartsLoader } from "./pages/Charts"
import { loader as summaryLoader } from "./pages/Summary"



import { store } from "./store"

const router = createBrowserRouter([
  {
    path:'/',
    element:<ProtectedRoutes>
        <AppLayout/>
      </ProtectedRoutes>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Charts/>,
        loader:chartsLoader(store),
      },

      {
        path:'incomes',
        element:<Incomes/>,
        loader:incomeLoader(store),
      },

       {
        path:'incomes/income/:id',
        element:<EditIncomePage/>,
        action:editIncomeAction(store),
        loader:editIncomeLoader(store),
      },

      {
        path:'expenses',
        element:<Expenses/>,
        loader:expenseLoader(store),

      },

      {
        path:'expenses/expense/:id',
        element:<EditExpensePage/>,
        action:editExpenseAction(store),
        loader:editExpenseLoader(store), 
      },

      {
        path:'budget',
        element:<Budget/>
      },

        {
        path:'settings',
        element:<Settings/>,
        action:settingsAction(store),
      },

        {
        path:'summary',
        element:<Summary/>,
        loader:summaryLoader(store),
      },

    ]
  },

    {
    path:'/landing',
    element:<Landing/>,
    errorElement:<Error/>
  },

  {
    path:'/register',
    element:<Register/>,
    action:registerAction,
    errorElement:<Error/>
  },

   {
    path:'/login',
    element:<Login/>,
    action:loginAction(store),
    errorElement:<Error/>
  }


])


const App = () => {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App