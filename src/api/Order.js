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
        const {items} = order
        await Csrf.getCookie();
        return Api.post('api/orders', {items})
    }

}

export default new Order();