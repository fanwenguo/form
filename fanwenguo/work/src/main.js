import Vue from "vue";
import fom from './components/form';
var vm = new Vue({
    el: "#app",
    template: "<div class='wrap'><fom/></div>",
    components: {
        fom
    }
})