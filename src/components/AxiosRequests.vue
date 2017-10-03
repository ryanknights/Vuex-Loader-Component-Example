<template>
  <div>
    <h2>Axios Requests</h2>  
    <button @click="getRequest">GET Request</button>
    <button @click="postRequest">POST Request</button>
    <button @click="errorRequest">Errored Request</button>
    <br /><br />
    <span v-if="isLoading">HTTP request is loading...</span>
  </div>
</template>

<script>

import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'axios-requests',
  computed : {
    ...mapGetters({
      'isLoading': 'loader/isLoading'
    })
  },
  methods: {
    getRequest () {
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.data)
        .then((data) => console.log(data))
        .catch(error => console.log(error.response));
    },
    postRequest () {
      const input = {title: 'foo', 'body': 'bar', userId: 1};

      axios.post(`https://jsonplaceholder.typicode.com/posts`, input)
        .then(response => response.data)
        .then((data) => console.log(data))
        .catch(error => console.log(error.response));      
    },
    errorRequest () {
      axios.delete(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.data)
        .catch(error => console.log(error.response));
    }
  }
}
</script>

<style scoped>

</style>
