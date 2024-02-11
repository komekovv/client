import authToken from "@/utils/authToken"
import { Navigate } from "react-router-dom"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AuthMiddleware (WrappedComponent:any){
  
  return () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
  
    const token = authToken()

    if(!token){
      return <Navigate to={'/register'} />
    } 
    return <WrappedComponent />
  }
}

export default AuthMiddleware;