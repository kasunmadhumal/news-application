<template>
    <div>
        <h1>News list</h1>
    
        <table>
        <tr v-for="news in allNewsObjects">

                <h3>{{ news.source }}</h3>

        </tr>

    </table>
    </div>
</template>

<script>

// import NewsCard from "../components/NewsCard.vue";
import Repository from "../repository/repository";

 export default{
    name:'HomeView',

    data(){
        return{
            allNewsObjects :[],
        }
    }
   ,
    async mounted(){
        Repository.getLatestHeadlines().then(res => {
            this.allNewsObjects = res.articles
            console.log(res);
        }).catch(err => {
            console.log(err.message);
        })
    }
 }


</script>