<template>
  123
</template>
<script>
  export default {
    mounted(){
      this.getAppleid();
    },
    methods:{
      getAppleid(){
        if (this.$route.query.user){
          localStorage.setItem('appleID',this.$route.query.user)
          self.close()
        }
      }
    },
  }
</script>
