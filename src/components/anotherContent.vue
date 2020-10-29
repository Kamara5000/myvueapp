<template>
  <div> 
    
      <div id="con" v-if="verify && num<=0">display me if condition is true</div>
      <div id="conn" v-else>display me if condition is false</div>
      
      <!-- <div v-show="verify">display me if condition is true</div> -->
      <button v-on:click="verification">verify</button>
      <div v-bind:class="{'bg-success': num>50, 'bg-danger':num<50}" >fail</div>
      <div v-bind:style="{'background-color':bg, color:'white','font-size': `${font}px` }"  >i will chage my background color randomly</div>
      <button v-on:click="randomColor" >change bg color randomly</button>
      <button v-on:click="inFont()" >change my font</button>
       
    </div> 
</template>

<script>
export default {
    name: "AnotherContent",

    props:["mySchool"],

    data(){

    return{
       num:0,
      verify:true,
      bg: 'red',
      font: 5
    }
    } ,

    methods:{
      verification(){
        this.verify=!this.verify
      },

      randomColor(){
        let myCol= Math.floor(Math.random()*1000000);
        this.bg= `#${myCol}`
      },

      inFont(){
        this.font+=15;
      }
    }





}


</script>

<style scoped>
    #con{background-color: aqua;

  }

  #conn{
    background-color: blueviolet
  }
</style>