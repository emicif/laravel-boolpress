require('./bootstrap');

window.axios = require('axios');
window.axios.get('http://127.0.0.1:8000/api/posts').then(results => {
    console.log(results);
}).catch(e => {
    console.log(e);
});


window.Vue = require('vue');

import AppComponent from './app/AppComponent'
//AppComponent = require('./app/AppComponent.vue').default

import router from './routes'

const app = new Vue({
    el: '#app',
    render: (h) => h(AppComponent), //'h' si può cambiare->es. start
    router //non scrivo router:router perché è lo stesso nome (proprietà e variabile)
});




