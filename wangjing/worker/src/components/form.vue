<template>
    <div >
        <ul>
            <li>
                <label for='name'>姓名：</label>
                <input type='text' id='name' v-test:name='rules' v-model='formData.name'/>
            </li>
            <li>
                <label for='pwd'>密码：</label>
                <input type='text' id='pwd' v-test:pwd='rules' v-model='formData.pwd'/>
            </li>
            <li>
                <label for='age'>年龄：</label>
                <input type='text' id='age' v-test:age='rules' v-model='formData.age'/>
            </li>
            <li>
                <label for='email'>邮箱：</label>
                <input type='text' id='email' v-test:email='rules'  v-model='formData.email'/>
            </li>
            <li><button @click='submit'>登录</button></li>
        </ul>
    </div>
</template>
<script>

  export default {
    data(){
        return{
         
            formData:{
                name:'',
                pwd:'',
                age:'',
                email:''
            },
            rules:{
                name:{
                    reg:/[\u4e00-\u9fa5]/,
                    msg:'err,姓名'
                },
                pwd:{
                    reg:/^[0-9a-zA-Z]*$/,
                    msg:'err,密码'
                },
                age:{
                    reg:/^[0-9]*$/,
                    msg:'err,age'
                },
                email:{
                    reg:/^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/,
                    msg:'err,email'
                }
            }
        }
    },
    methods:{
        submit(){
            let {name,pwd,age,email}=this.formData
            if(name&&pwd&&age&&email){
                    console.log('登录成功')
            }else{
                alert(1)
            }
        }
    },
    directives:{
        test:{
            bind(el,binding){//inserted
                //清除节点
                let clearDom=function(){
                    let $el=el.parentNode.getElementsByTagName('b')[0]
                    if($el){
                        el.parentNode.removeChild($el)
                    }
                }
                //创建节点
                let createDom=function(msg,state){
                    clearDom()
                    let $el=document.createElement('b')
                    $el.innerHTML=msg;
                    if(state){
                        $el.style.color='green'
                    }else{
                        $el.style.color='red'
                    }
                   
                    el.parentNode.appendChild($el)
                }
                
                el.onchange=()=>{
                    console.log(111)
                    let ruleArg=binding.value[binding.arg]
                    if(ruleArg.reg.test(el.value)){
                        createDom('ok',true)
                        
                            console.log('ok')
                    }else{
                        createDom(ruleArg.msg,false)

                            console.log('error')
                    }
                }
            }
        }
    }
  }

</script>
<style>


</style>