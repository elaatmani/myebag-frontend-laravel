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

    async login_google({google_id, google_jwt}) {
        await Csrf.getCookie();
        return Api.post('api/auth/login_google', {google_id, google_jwt})
    }

    async singup({firstname, lastname, telephone, email, password}) {
        await Csrf.getCookie();
        return Api.post('api/auth/signup', {firstname, lastname, telephone, email, password})
    }

    async getGoogleUrl() {
        await Csrf.getCookie();
        return Api.get('api/auth/google')
    }

    async orders() {
        await Csrf.getCookie();
        return Api.get('api/user/orders')
    }

}

export default new User();