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

    // Order Statuses
    async statuses() {
        await Csrf.getCookie();
        return Api.get('api/orders/statuses')
    }

    async createStatus(status) {
        await Csrf.getCookie();
        return Api.post('api/orders/statuses', status)
    }

    async updateStatus(id, status, type) {
        await Csrf.getCookie();
        return Api.post('api/orders/' + id + '/status', {status, type})
    }

    async confirmPayment(id) {
        await Csrf.getCookie();
        return Api.post('api/orders/' + id + '/confirmPayment')
    }

    async deleteStatus(id) {
        await Csrf.getCookie();
        return Api.delete('api/orders/statuses/' + id)
    }

}

export default new Order();