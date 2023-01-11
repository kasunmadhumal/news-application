<template>
  <div class="container justify-content-center d-flex">
        <img src="../assets/img/bug-fixed.svg" alt="error image">
        <h2 v-if="apiStatus === 'error'">{{ message }}</h2>
  </div>
</template>


<script>
import Repository from '../repository/repository'
export default {
    name:'ErrorApiCallView',
    data(){
        message:'';
        apiStatus:''
        
        
    },
    created(){
        let response = Repository.getApiState()
        this.apiStatus = response.status;
        this.message = response.message;

        
    }
}
</script>

<style scoped>


img{
    width: 50%;
    min-height: 80vh;
    display: flex;
    align-items: center;
}

</style>