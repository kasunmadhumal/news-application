<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">News Application</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/history-of-visited" class="nav-link">History</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/news-sources" class="nav-link">Sources</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/error-api" class="nav-link">Api Key</router-link>
        </li>
      
      </ul>
    </div>
  </nav>


</template>

<script>
export default {
  name: 'NavigationBar',
}

</script>

<style>


</style>