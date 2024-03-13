import {  useSelector } from "react-redux";
import { selectLoggedInUser } from "../authSlice";
import { Navigate } from "react-router-dom";

function Protected({children}) {
    const user = useSelector(selectLoggedInUser) 
   
    if(!user){
        return <Navigate to='/login' replace={true}></Navigate>
    }
    if(user && user.role=='agent'){
        return <Navigate to='/homeagent' replace={true}></Navigate>
    }
    if(user && user.role=='admin'){
        return <Navigate to='/admin' replace={true}></Navigate>
    }
    return children;
    
}
export default Protected;