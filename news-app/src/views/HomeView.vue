<template>


    <div class="container">
       <div class="title-home-page"> <h1 class="wow slideInLeft" id="title">Headlines</h1> </div>

       <div id="search-bar">
                <input class="form-control mr-sm-2" v-model="searchTerm" @input="getSearchData" aria-label="Search" placeholder="Search" />
     
       </div>


    <hr id="hr">
    <div class="row">
      <div v-for="news,index in allNewsObjects" class="col-12 col-sm-8 col-md-4">
        <div class="card">
          <div class="card-body">
            <NewsView 
                :key="news.id"
                :id="index"
                :date="news.publishedAt"
                :title="news.title" 
                :author="news.author"
                :description="news.description"
                :content="news.content"
                :imageUrl="news.urlToImage"
                :url="news.url"
        />
          </div>
        </div>
      </div>
    </div>
  </div>



   
</template>


<script>

import NewsView from "../components/NewsViewComponent.vue";
import Repository from "../repository/repository"
 export default{
    name:'HomeView',
    components:{
        NewsView
    },

    data(){
        return{
            allNewsObjects :[],
            searchTerm: '',
            loading: true,
        }
    }
   ,
    async mounted(){
        Repository.getLatestHeadlines().then(res => {
            this.loading = false;
            this.allNewsObjects = res.articles
            console.log(res);
        }).catch(err => {
            console.log(err.message);
        })
    },
    methods:{
        getSearchData(){
            Repository.getSearchedHeadlines(this.searchTerm).then(res => {
              this.allNewsObjects = res.articles
            }).catch(err => {
                console.log(err);
            })
        }
    }
 }



</script>

<style>

#search-bar{
  margin-top: 1%;

}
.title-home-page{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212529;
  margin-top: 2%;
}

#hr{
    margin-top: 6%;
}

#title {
    color: #fbf6f6;
    background-color: #212529;
    font-size: 36px;
    text-shadow: 2px 2px #fbf9f9;
    font-family: 'Lobster', cursive;
    animation: animateText 2s;
    text-align: center;
  }
  @keyframes animateText {
    0%{
      transform: scale(0);
    }
    100%{
      transform: scale(1);
    }
  }
  @media only screen and (max-width: 600px) {
    #title {
      font-size: 30px;
    }
  }



</style>