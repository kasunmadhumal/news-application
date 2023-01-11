<template>

<div class="card" style="width:100%;height: 100%">
  <img v-bind:src="imageUrl" class="card-img-top" alt="image..">
  <div class="card-body">
    <h5 class="card-title" :id="'card-title-'+id">{{title}}</h5>
    <p class="card-text">{{description}}</p>
    <div style="display: flex;">
    <router-link :to="{ name: 'DetailedNewsView', query: {id:id,date:date,title:title,description:description,imageUrl:imageUrl,content:content,author:author,url:url } }" @click="saveItem(this.title)">
        <a href="#" class="btn btn-sm btn-info d-sm-none d-md-block">Show More</a>
    </router-link>
        <img src="../assets/img/editText.png" v-on:click="editHeadline" id="editText" class="btn btn-sm d-md-block"/>

    </div>


  </div>    
</div>

</template>


<script>
export default {
    name:'NewsCard',
    props: {
        id:Number,
        date: String,
        title: String,
        description: String,
        imageUrl:String,
        content:String,
        author:String,
        url:String
    },
    methods: {
        saveItem(title) {
            this.recentPages = JSON.parse(localStorage.getItem('recentPages')) || []
            this.recentPages.push(title)
            localStorage.setItem('recentPages', JSON.stringify(this.recentPages))

  },

    editHeadline(){

        var inputTitle = prompt("Enter New Title?");
        if (inputTitle.length < 255) {
              document.getElementById('card-title-'+this.id).innerHTML = inputTitle
              
        }else{
            alert("Title is too long.");
        }
    }
  }
}

</script>



<style>

.card {
  flex-basis: calc(25% - 20px);
  margin:5px; 
  padding: 5px; 
  box-shadow: 5px 5px 5px 0px gray; 
}

.card-img-top{
    height: 90px;
}

.card-title{
    height: 70px;
    overflow: hidden;
  text-overflow: ellipsis; 
}

.card-title::after{
    content: "...";
}

.card-text{
    height: 116px;
    overflow: hidden; 
    text-overflow: ellipsis;

}

.card-text::after{

    content: "...";

}

#editText{
    height: 20%;
    width: 20%;
    margin-left: 30%;
}



</style>

