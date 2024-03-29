import Api from "./Api";
import Csrf from "./Csrf";

class Size {
    
    async all() {
        await Csrf.getCookie();
        return Api.get('api/sizes')
    }
    
    async get(id) {
        await Csrf.getCookie();
        return Api.get('api/sizes/' + id)
    }

    async create({name, sizes}) {
        await Csrf.getCookie();
        return Api.post('api/sizes', {name, sizes})
    }

    async delete(id) {
        await Csrf.getCookie();
        return Api.delete('api/sizes/' + id)
    }

}

export default new Size();