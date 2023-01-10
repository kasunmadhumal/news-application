<template>

<div class="card" style="width:100%;height: 400px">
  <img v-bind:src="imageUrl" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{title}}</h5>
    <p class="card-text">{{description}}</p>
    <a href="#" class="btn btn-primary">Show More</a>
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
    computed: {
        formattedDescription(){
            return this.description.substring(0, 20) + "...";
        }
    },
    methods: {
    saveItem(item) {
      // Save the item to the local storage
      const items = JSON.parse(localStorage.getItem('items'))??[]
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));
    },

    editTitle(){
      var inputTitle = prompt("Enter new title:")
      document.getElementById('news-title-'+this.id).innerHTML = inputTitle
    }
  }
}

</script>



<style>

.card {
  flex-basis: calc(25% - 20px); /* make each card take up 25% of the width of the container and add a 20px margin */
  margin:5px; /* add a 10px margin to each side of the card */
  padding: 5px; /* add padding to the card */
  box-shadow: 5px 5px 5px 0px gray; /* match the offset values with the margin values */
}

.card-img-top{
    height: 90px;
}

.card-title{
    height: 70px;
    overflow: hidden; /* hide any text that overflows the container */
  text-overflow: ellipsis; /* add an ellipsis at the end of the truncated text */
}

.card-title::after{
    content: "...";
}

.card-text{
    height: 116px;
    overflow: hidden; /* hide any text that overflows the container */
    text-overflow: ellipsis; /* add an ellipsis at the end of the truncated text */

}

.card-text::after{

    content: "...";

}



</style>

