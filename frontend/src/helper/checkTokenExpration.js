import { getAccessToken } from "./localStorage";
import jwtDecode from 'jwt-decode';
export function checkTokenExpration(){
    let token = getAccessToken();
    if(token){
        if(jwtDecode(token).exp > Date.now()/1000) return true;
        else return false;
    }else return false;
}