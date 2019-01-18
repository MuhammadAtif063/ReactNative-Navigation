import axios from 'axios';
import Constant from '../constant/Constant';
const baseService = axios.create({
       baseURL: Constant.BASE_API_URL,
        responseType: 'json'
    });

//baseService.defaults.headers.common['Authorization'] = AuthStore.getJwt();

export default baseService;