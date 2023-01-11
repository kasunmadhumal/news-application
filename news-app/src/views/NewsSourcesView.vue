<template>
 
    <div class="title-home-page"> <h1 class="wow slideInLeft" id="title">News Sources</h1> </div>
    <div class="container">
        <div class="row">
      <div class="col-12 col-sm-8 col-md-4" id="card-sources" v-for="sources in newsResources" :key="sources">
        <div class="card card-sources">
            <div class="card-body" id="card-body-sources">
                <h5 class="card-title-sources" >{{sources.name}}</h5>
                <p class="card-text-sources">{{sources.description}}</p>
           </div>    
        </div>
    </div>
    </div>
</div>
  </template>
  
  <script>

import Repository from '../repository/repository';
export default {
    name:'NewsSourcesView',

    data(){
        return{
            newsResources :[],
            loading:false
        }
    }
   ,
    async mounted(){
        
        this.loading=true
        Repository.getListOfSources()
        .then(res => {
            this.newsResources = res.sources
            this.loading=false

        }).catch(err => {
            console.log(err);
        })
        
    }
    

}
  

  
  </script>
  
  
  <style>

.card-title-sources{
    height: 50px;
    overflow: hidden;
  text-overflow: ellipsis; 
}

.card-text-sources{
    height: 70px;
    overflow: hidden;
  text-overflow: ellipsis; 

}

.card-text-sources:after{
    content: "...";
}

  #card-body-sources{
    height: 30%;
  }

#card-sources{
    margin-top: 1%;
    width: 20%;
    
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