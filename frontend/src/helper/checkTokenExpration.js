import { getAccessToken } from "./localStorage";
import jwtDecode from 'jwt-decode';
export function checkTokenExpration(){
    try{
        let token = getAccessToken();
        if(token){
            if(jwtDecode(token).exp > Date.now()/1000) return true;
            else return false;
        }else
        console.log("Aaaaaa");
    }catch(e){
        return false;
    }
   
}