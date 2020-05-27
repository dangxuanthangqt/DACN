import axios from 'axios';
class axiosService {
    constructor() {
        const instance = axios.create();
        instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        instance.defaults.baseURL = 'https://online-hotel-kunlezisme.herokuapp.com';
        instance.interceptors.response.use(this.handlesuccess, this.handleError)
        this.instance = instance;
    }
    handlesuccess=(res)=>{
        return res;
    }
    handleError=(error)=>{
        return Promise.reject(error);
    }
    get=(url)=>{
        return this.instance.get(url);
    }
    post=(url, data)=>{
        return this.instance.post(url, data);
    }
    put=(url, data)=>{
        return this.instance.put(url, data);
    }
    delete=(url, data)=>{
        return this.instance.delete(url, data)
    }
}
export default new axiosService();