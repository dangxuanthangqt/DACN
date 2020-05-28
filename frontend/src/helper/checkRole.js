
import jwtDecode from 'jwt-decode';

export const checkRole =(token)=>{
  //  let token = getAccessToken();
  let role = jwtDecode(token).scopes;

    if (role) {
    //    console.log(role.indexOf("ROLE_ADMIN"))
        if(role.indexOf("ROLE_ADMIN") !==-1) return true;
        else return false;
    }else return false
}