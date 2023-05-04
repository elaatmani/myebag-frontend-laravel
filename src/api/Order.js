import Api from "./Api";
import Csrf from "./Csrf";

class Order {
    
    async all() {
        await Csrf.getCookie();
        return Api.get('api/orders')
    }

    async get(id) {
        await Csrf.getCookie();
        return Api.get('api/orders/' + id)
    }

    async create(order) {
        await Csrf.getCookie();
        return Api.post('api/orders', order)
    }

}

export default new Order();