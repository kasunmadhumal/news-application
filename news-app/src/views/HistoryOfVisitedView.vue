<template>
     <div>
        <h2>Recent Read Headlines</h2>
        <!-- <button @click="sort('asc')">Sort ascending</button>
        <button @click="sort('desc')">Sort descending</button> -->
        <ul>
        <li v-for="headline in visitedPages" :key="headline">{{ headline }}</li>
        </ul>
  </div>
</template>


<script>

import Cookies from 'js-cookie'

export default {
  name: 'History',
  data() {
    return {
      visitedPages: []
    }
  },
//   computed: {
//     sortedHeadlines() {
//       if (!this.sortOrder) return this.visitedPages
//       const sortFunction = (a, b) => {
//         if (this.sortOrder === 'asc') return a.localeCompare(b)
//         if (this.sortOrder === 'desc') return b.localeCompare(a)
//       }
//       return [...this.visitedPages].sort(sortFunction)
//     }
//   },
  methods: {
    sort(order) {
      this.sortOrder = order
    }
  },
  mounted(){
    let visitedPages = Cookies.getJSON('visitedPages') 
    this.visitedPages = visitedPages
    console.log(visitedPages)
}
}


</script>


<style>


</style>