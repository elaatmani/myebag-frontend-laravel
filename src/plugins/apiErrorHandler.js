const ApiErrorHandler = {
    install(app) {
        app.config.globalProperties.$handleApiError = function(err) {
            console.log('in api error handler');
            console.log(err);
            const code = err?.response?.data?.code;
            let type = 'danger'
            let body = "Something wrong happened. Try again"
            let alert = true
            const errors = ['VALIDATION_ERROR', 'NOT_ACTIVE_ERROR', 'INVALID_CREDENTIALS'];

            if (errors.includes(code)) {
                alert = false;
            }

            console.log(err);
            if (err.code == "ERR_NETWORK") {
                body = 'Network error. Check your connection'
            }


            switch (code) {
                case 'NOT_ALLOWED':
                    body = 'Your are not allowed to this resources'
                break;

                case 'NOT_AUTHENTICATED':
                    body = 'Your session expired'

                    setTimeout(() => {
                        app.config.globalProperties.$store.dispatch('user/logout')
                        app.config.globalProperties.$router.push('/login')
                    }, 2000)
                break;
                
                case 'NOT_FOUND':
                    alert = false
                    if(
                        app.config.globalProperties.$route.name.split('/')[0] == 'dashboard' &&
                        app.config.globalProperties.$store.getters['user/isAdmin']
                    ) {
                        app.config.globalProperties.$router.push({ name: 'dashboard/404' })
                    } else {
                        app.config.globalProperties.$router.push({ name: '404' })
                    }
                    break;

                default:
                    break;
            }

            alert ? app.config.globalProperties.$alert({ type, body }) : '';
            return err
        }
    }
}

export default ApiErrorHandler