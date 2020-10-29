<template>
  <div>
    
    <Student v-bind:myStudent="myAllStudent" v-on:deletestudent="myDel" v-on:editstud="editMyStudent" />
    <InputItem v-on:myAdd="addMyStudent" />
    
    
  </div>
</template>
<script>

//import Navbar from './navbar';
import Student from './student';
import InputItem from './input';
export default {
  name: "AddStudent",

  data(){
    return{
      myAllStudent: [],
    }
  },

  components: {
   // Navbar,
    Student,
    InputItem
  },

  methods:{
    addMyStudent(student){
      this.myAllStudent=[...this.myAllStudent,student]
    },

    myDel(i){
      this.myAllStudent=this.myAllStudent.filter((stud,index)=>index !=i)
    },

    editMyStudent(ed){
        this.myAllStudent= this.myAllStudent.map((stud,i)=>i!=ed.k?stud:ed)
    }
  }


}
</script>

<style>

</style>
