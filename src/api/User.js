import Api from "./Api";
import Csrf from "./Csrf";

class User {
    
    async login({email, password}) {
        await Csrf.getCookie();
        return Api.post('api/auth/login', {email, password})
    }

}

export default new User();