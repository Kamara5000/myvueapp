<template>
        <div>
      <!-- <input type="text"  placeholder="Name" v-on:focusout="addName()" />
      <input type="text"  placeholder="Department" v-on:focusout="adddept()"  />
      <input type="text"  placeholder="School" v-on:focusout="addskul()"/> -->

      <input type="text" placeholder="Name"   v-model="name" />
      <input type="text" placeholder="Department"   v-model="dept" />
      <input type="text" placeholder="School"  v-model="school" />
      <button class="btn btn-outline-primary " v-on:click="myAdd"> Add Student</button>   
      
  
  </div>
 </template>

<script>
export default {
    name: "InputItem",

    data(){
      return{
             name: "",
             dept: "",
             school: "",
      
      }
      
     

    },

    props:["myStudent","obj",],
  
    methods: {


      myAdd(){
        let {name,dept,school}= this;
        this.$emit("myAdd",{name,dept,school})
      
      }
      //   addName(){
          

      //     let m= event.target.value
      //       console.log(m)
      //       this.obj.name=m
          
          
        
          
          
      //     console.log(this.arrayOfNames)
      // },

      // adddept(){
      //    let t= event.target.value
      //      this.obj.dept=t
      // },

      // addskul(){
      //      let p= event.target.value
      //     this.obj.school=p
      // },
    }
        

}
</script>

<style>

</style>