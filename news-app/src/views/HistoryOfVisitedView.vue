<template>
 
  <div class="title-home-page"> <h1 class="wow slideInLeft" id="title">Recent Read Headlines</h1> </div>
  <div class="card-container">
    <div class="card" id="card-history" v-for="title in recentPages" :key="title">
      <div class="card-title-history">
        <li id="li">{{ title }}</li></div>
    </div>
  </div>

</template>

<script>

export default {
    data() {
      return {
        recentPages: [],
        id:1.0
      }
    },
    created() {
      this.recentPages = JSON.parse(localStorage.getItem('recentPages'))
    },
};

</script>


<style>

.card-title-history{
    margin-top: 2%;
    margin-bottom: 2%;
}
#card-history{
    margin-top: 1%;
}
#card-history{
    width: 50%;
    float: none;
    margin-left: auto;
    margin-right: auto;
    

}
</style>