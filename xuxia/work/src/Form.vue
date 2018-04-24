<template>
    <form action="" method="get">
        <label for="name">
            <span>姓名</span>
            <input type="text" name="name" v-test="rules">
        </label>
        <label for="password">
            <span>密码</span>
            <input type="text" name="password" v-test="rules">
        </label>
        <label for="email">
            <span>邮箱</span>
            <input type="text" name="email" v-test="rules">
        </label>
        <button type="button" @click="submit">登录</button>
    </form>
</template>
<script>
    export default{
        data(){
            return{
                formData:{
                    name:null,
                    password:null,
                    email:null
                },
                rules:{
                    name:/^[\u4e00-\u9fa5]+$/,
                    password:/^[a-z0-9_-]{6,18}$/,
                    email:/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                }
            }
        },
        methods:{
            submit(){
                let {name,password,email}=this.formData;
                if(name&&password&&email){
                    alert('登录成功')
                }
                else{
                    alert('请正确填写内容')
                }
            }
        },
        directives: {
            test:{
                bind(el,binding){
                    let removeDom=()=>{
                        let b=el.parentNode.getElementsByTagName("b")[0];
                        if(b){
                            el.parentNode.removeChild(b);
                        }  
                    }
                    let createDom=(text,state)=>{
                        let b=document.createElement('b');
                        b.innerHTML=text;
                        if(state){
                            b.style.color="green"
                        }
                        else{
                            b.style.color="red"
                        }
                        el.parentNode.appendChild(b);
                    }
                    el.onchange=()=>{
                        removeDom()
                        let reg=binding.value[el.name];
                        if(reg.test(el.value)){
                            createDom('ok',true)
                        }
                        else{
                            createDom('格式错误',false)
                        }
                    }
                }
            }
        }
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    body{
        font-size: .32rem;
    }
    form{
        margin-top:20px;
        text-align: center;
    }
    label{
        display: block;
        text-align: center;
        margin:10px 0;
        height:50px;
        line-height: 50px;
    }
    label input{
        height: 20px;
        width:50%;
        box-sizing: border-box;
        margin-left:10px;
        border:1px solid #333;
    }
    button{
        width:50%;
        height: 30px;
        background: skyblue;
        border:none;
        color:#fff;
    }
</style>
