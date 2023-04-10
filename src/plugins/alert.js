const Alert = {
    install(app) {
        
        app.config.globalProperties.$alert = function(alert) {
            console.log('alert toggeled');
            this.$store.dispatch('alert/toggleAlert', alert);
        }
    }
}

export default Alert