import { Form, Link, redirect, useNavigation } from "react-router-dom"
import { SigningWrapper } from "../styledComponents/SigningStyles"
import { FormInput, Logo } from "../components"
import { customAPI } from "../utils/utils"
import { toast } from "react-toastify"
import { loginUser } from "../features/ui/uiSlice"



 export const action =(store) => async ({request}) => {
    const formData  = await request.formData()
    const loginData = Object.fromEntries(formData)

    try {
      const response = await customAPI.post('/auth/login',loginData)
      // console.log(response)
      store.dispatch(loginUser(response.data))
       toast.success("You've Successfully Login")
       return redirect('/')
    } catch (error) {
      const errorMsg = error?.response?.data?.msg || 'Invalid Login Details'
      toast.error(errorMsg)
      return error
    }
  }
const Login = () => {

  const navigation = useNavigation();
  const submitting = navigation.state === 'submitting'

  return (
      <SigningWrapper>
      <Form method="POST" className="form">
        <Logo/>
        <h4>Login</h4>

        <FormInput name="email" type="email" label="email"/>

        <FormInput name="password" type="password" label="password"/>
        
        <button type="submit" className="btn btn-block" disabled={submitting}>{submitting?'Submitting...':'Submit'}</button>
        <button type="button" className="btn btn-block demo">Demo User</button>
        <p>Not yet a member? <Link to="/register" className="link">Register</Link></p>
      </Form>

    </SigningWrapper>
  )
}

export default Login