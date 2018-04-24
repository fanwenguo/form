<template>
    <div>
        <Form/>
    </div>
</template>
<script>
// import dir from './dir.vue'
import Form from './form.vue'
  export default {
    name:"app",
    data(){
        return {
          data:[]
        }
    },
    components:{
        Form
    }
  }

</script>
<style>


</style>