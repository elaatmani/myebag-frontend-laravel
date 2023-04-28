import Api, { ApiForm } from "./Api";
import Csrf from "./Csrf";

class Category {
    
    async create(category) {
        await Csrf.getCookie();
        return ApiForm.post('api/categories', category)
    }

    async all() {
        await Csrf.getCookie();
        return Api.get('api/categories')
    }

    async get(id) {
        await Csrf.getCookie();
        return Api.get('api/categories/' + id)
    }

    async delete(id) {
        await Csrf.getCookie();
        return Api.delete('api/categories/' + id)
    }

    async products(id) {
        await Csrf.getCookie();
        return Api.get('api/categories/' + id + '/products')
    }
}

export default new Category();