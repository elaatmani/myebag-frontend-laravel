
const currentTheme = localStorage.getItem('myebag-theme');
let initialState = {
    isDarkMode: false
}
if(currentTheme == 'dark') {
    document.querySelector('html').classList.add('tw-dark');
    initialState.isDarkMode = true
}

export default {
    namespaced: true,
    state: initialState,
    mutations: {},
    actions: {}
}