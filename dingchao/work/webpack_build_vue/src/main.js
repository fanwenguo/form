import Vue from 'vue'
import ajax from "./tool/ajax"
import app from "./components/app.vue"

Vue.prototype.$ajax = ajax

new Vue ({
    el:"#app",
    template:"<div><App /></div>",
    components:{
        App:app
    }
})