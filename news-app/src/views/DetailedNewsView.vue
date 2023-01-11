<template>
    <div class="container my-5">
    <div class="row">
        <div class="col-md-12">
            <h1 class="text-center mb-3">{{title}}</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <img v-bind:src="imageUrl" class="img-fluid rounded" alt="Article Image">
        </div>
        <div class="col-md-6">
            <p class="lead">{{content}}</p>
            <a v-bind:href="url" class="btn btn-primary btn-lg float-right" target="_blank">Read More</a>
        </div>
    </div>
    <div class="row my-4">
        <div class="col-md-12">
            <div class="card border-0 shadow">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <p class="text-muted">By: <strong>{{author}}</strong></p>
                        <p class="text-muted">Date: <strong>{{date}}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

    import repository from '../repository/repository';

    export default {
        name: "NewsView", 

        data(){
           
        return{
            id:'',
            date:'',
            title:'',
            description:'',
            imageUrl:'',
            content:'',
            author:'',
            url:'',

        }
    },

    async mounted(){
            this.id = this.$route.query.id
            this.date = this.$route.query.date
            this.title = this.$route.query.title
            this.description = this.$route.query.description
            this.imageUrl = this.$route.query.imageUrl
            this.content = this.$route.query.content
            this.author = this.$route.query.author
            this.url = this.$route.query.url
        
    },
        

        
    }   
        
    

</script>

<style>

.container {
    max-width: 1200px;
}

img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.card {
    background-color: #fff;
}



</style>