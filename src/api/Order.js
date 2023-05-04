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

    async create() {
        const o = {
            total: '',
            items: [
                {
                    product_variation_id: 1,
                    quantity: 1
                }
            ],
            payment_details: {
                amount: '',
                provider: 'paypal',
                status: true
            }
        }
        await Csrf.getCookie();
        return Api.post('api/orders', o)
    }

}

export default new Order();