import Api from "./Api";
import Csrf from "./Csrf";

class Color {
    
    async all() {
        await Csrf.getCookie();
        return Api.get('api/colors')
    }
    
    async get(id) {
        await Csrf.getCookie();
        return Api.get('api/colors/' + id)
    }

    async create({name, hex_code}) {
        await Csrf.getCookie();
        return Api.post('api/colors', {name, hex_code})
    }

    async delete(id) {
        await Csrf.getCookie();
        return Api.delete('api/colors/' + id)
    }

}

export default new Color();