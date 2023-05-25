import Api, { ApiForm } from "./Api";
import Csrf from "./Csrf";

class Slider {
    

    async setActive(id, value) {
        await Csrf.getCookie();
        return Api.post('api/sliders/' + id + '/active', {active: value})
    }

    async create(slider) {
        await Csrf.getCookie()
        return ApiForm.post('api/sliders', slider);
    }

    async delete(id) {
        await Csrf.getCookie();
        return Api.delete('api/sliders/' + id);
    }

    

}

export default new Slider();