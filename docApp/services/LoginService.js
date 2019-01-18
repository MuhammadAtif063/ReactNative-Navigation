import baseService from './BaseService';
import Constant from '../constant/Constant';

class LoginService{
 
    login(login) {
        console.log("Login Service calling...");
        console.log(login);
        return baseService.post(Constant.USER_LOGIN, login)
                        .then(response => {
                console.log("Login Service calling...");
                        return response.data;
                    }).catch(function (error) {
                        if(error.message === "Network Error"){
                            return error;
                            console.log(error);
                        }else{
                            return error.response.data;
                        }
            });
        }
}
const loginService = new LoginService();
export default loginService;
