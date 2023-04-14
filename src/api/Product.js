import Api, { ApiForm } from "./Api";
import Csrf from "./Csrf";

class Product {
    
    async get(id) {
        await Csrf.getCookie();
        return Api.get('api/products/' + id)
    }

    async create(p) {
        const product = {
            name: '',
            description: '',
            discount_id: null,
            size_type_id: null,
            images: [
                {
                    order: '',
                    image: p
                }
            ],

            stock_alert: 10,
            product_variations: [
                {
                    id: '',
                    product_id: '',
                    size_id: '',
                    color_id: '',
                    quantity: '',
                    price: ''
                }
            ]
        }
        await Csrf.getCookie();
        return ApiForm.post('api/products', product)
    }

}

export default new Product();