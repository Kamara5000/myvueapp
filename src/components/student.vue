<template>
  <div>

    <div v-show="edit" >
      <input type="text" placeholder="edit name"   v-model="name" />
      <input type="text" placeholder="edit departemnt"   v-model="dept" />
      <input type="text" placeholder="edit school"  v-model="school" />
      <button v-on:click="editstud()" class="btn btn-dark" >edit</button>

    </div>
      <Table class="table table-hover table-bordered table-striped table-sm table-strip ">
          <thead class="thead-dark" >
            <th>S/N</th>
            <th>NAME</th>
            <th>DEPARTMENT</th>
            <th>SCHOOL</th>
            <th>ACTION</th>
            </thead>
            <Tbody v-bind:key="i" v-for="(myStudent, i) in myStudent" >
              <TR>
                <Td>{{i+1}}</Td>
                <Td>{{myStudent.name}}</Td>
                <Td>{{myStudent.dept}}</Td>
                <Td>{{myStudent.school}}</Td>
                <button  class="my-2 btn btn-sm btn-primary" v-on:click="deletestud(i)" >delete</button>
                
                <!-- <button  class="my-2 btn btn-sm btn-dark" v-on:click="editstud(i)" >edit</button>
   -->

                <button  class="my-2 btn btn-sm btn-dark" v-on:click="edi(i)" >edit</button>
  
              </TR>
            </Tbody>
        

      </Table>
        <!-- My name is {{myStudent.name}}, i am a student of {{myStudent.school}} and i study {{myStudent.dept}} -->
        </div>
</template>

<script>
export default {
    name: "Student",
    
  data(){
      return{
        edit: false,
        k: "",
        name: "",
        dept: "",
        school: "",
      }
  },
    props:["myStudent", "index", ],

   methods:{

      deletestud(i){
          
            alert("deleting student number "+(i+1));
            
             this.$emit("deletestudent",i)
         },


         edi(i){
            this.edit=true;

           this.k=i;
            console.log(this.k)
         },


         editstud(){

           //this.edit=true;
           let {k,name, dept, school}= this;
             this.$emit("editstud",{k,name,dept,school})
         
         }

   }
    

}
</script>

<style>

</style>