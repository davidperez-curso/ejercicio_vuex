<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <Parent/>

  </div>
</template>

<script>
// @ is an alias to /src
import Parent from '@/components/Parent.vue'

export default {
  name: 'Home',
  components: {
    
    Parent
  }
}
</script>
