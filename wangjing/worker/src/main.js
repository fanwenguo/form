
import Vue from "vue";
import app from './components/app.vue';
import './direction/index'
var vm = new Vue({
    el: "#app",
    template: "<div class='wrap'><app/></div>",
    components: {
        app
    }
})