<template></template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import axios from '../utils/axios'

  export default defineComponent({
    setup() {
        //使用axios
      axios
        .get('/users/XPoet')
        .then((res) => {
          console.log('res: ', res)
        })
        .catch((err) => {
          console.log('err: ', err)
        })
    }
  })
</script>
