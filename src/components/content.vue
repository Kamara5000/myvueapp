<template>
  <div>
     <p>My name is {{myName}}  i'm in {{myDept}} </p> 
     <ContentChild v-bind:mySchool="mySchool" v-bind:myAge="age" />
  </div>
</template>

<script>
import ContentChild from "./contentChild"
import Axios from 'axios'
export default {
    name: "Content",
    components: {
        ContentChild
    },
    props: ["myName", "mySchool", "myDept" ],

    mounted(){

        let url =`https://jsonplaceholder.typicode.com/users`;
        Axios.get(url).then(res =>console.log(res.data[0]))
    },

    data(){
        return{
            age: 400
        }
    }

}
</script>

<style>

</style>