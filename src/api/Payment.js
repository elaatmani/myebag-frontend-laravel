import Api from "./Api";
import Csrf from "./Csrf";

class Payment {
    
    async initiatePayment(cart, total) {
        await Csrf.getCookie();
        return Api.post('api/payment/initiate', { cart, total })
    }

}

export default new Payment();