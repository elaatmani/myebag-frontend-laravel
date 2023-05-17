import { frontendUrl, backendUrl } from "@/config/app"
import { computed } from "vue";


export default {
    install(app) {
        app.config.globalProperties.$frontend = (path) => frontendUrl + path;
        app.config.globalProperties.$backend = (path) => backendUrl + path;

        app.config.globalProperties.$primary = computed(() => app.config.globalProperties.$store.getters['app/primary'])
        app.config.globalProperties.$secondary = computed(() =>app.config.globalProperties.$store.getters['app/secondary'])
    }
}