import { publicRequest } from "../requestMethods";
import { loginError, loginStart, loginSuccess, logoutSuccess } from "./userRedux"

export const login=async(dispatch,user)=>{
    dispatch(loginStart());
    try{
        const reply=await publicRequest.post("/user/login",user)
       const res=reply.data
       if(reply.data){dispatch(loginSuccess(reply.data))}
       else {}
        
       
        
    }
    catch(e){
        dispatch(loginError())
    }
}
export const logout=(dispatch)=>{
    dispatch(logoutSuccess());
}