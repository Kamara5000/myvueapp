<template>
  <div>
      this is the vuex practice page <br/>
      i have {{getNum}} boss named {{getName}}
      <button @click="increment(1)" >add</button>
      
      <button @click="increment(5)" >add by 5</button>

      <button @click="subtract(2)">minus 4</button>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    name:"VuexClass",

    computed: mapGetters(['getNum', 'getName']),

    methods: {...mapActions(['increment', 'minus']),
        subtract(k){

            let n = k*2;
            this.minus(n)
        }
    }
}
</script>

<style>

</style>