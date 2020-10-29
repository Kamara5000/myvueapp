<template>
  <div>
      I'm from  {{mySchool}}
      I'm {{myAge}} years old

  </div>
</template>

<script>
export default {
    name: "ContentChild",
    
    props:["mySchool","myAge" ]

}

    
</script>

<style>

</style>