import Api from "./Api";
import Csrf from "./Csrf";

class User {
    
    async current() {
        await Csrf.getCookie();
        return Api.get('api/user')
    }

    async all() {
        await Csrf.getCookie();
        return Api.get('api/users')
    }

    async login({email, password}) {
        await Csrf.getCookie();
        return Api.post('api/auth/login', {email, password})
    }

    async singup({firstname, lastname, telephone, email, password}) {
        await Csrf.getCookie();
        return Api.post('api/auth/signup', {firstname, lastname, telephone, email, password})
    }

    async getGoogleUrl() {
        await Csrf.getCookie();
        return Api.get('api/auth/google')
    }

}

export default new User();