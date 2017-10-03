<template>
  <div id="app">
    <h1>Vuex Loader</h1>
    <button @click="setLoading(true)">Enable Loading</button>
    <button @click="setLoading(false)">Disable Loading</button>
    <button @click="timeoutExample">2 Second Loading</button>
    <button @click="promiseExample">Promise Loading</button>
    <axios-requests />
    <loader />
  </div>
</template>

<script>

import Loader from './components/Loader';
import AxiosRequests from './components/AxiosRequests';

import { mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    Loader,
    AxiosRequests
  },
  methods: {
    ...mapActions({
      setLoading: 'loader/setLoading'
    }),
    timeoutExample () {
      this.setLoading(true);
      setTimeout(() => this.setLoading(false), 2000);
    },
    promiseExample () {
      this.setLoading(true);
      this.returnPromise()
        .then((data) => this.setLoading(false))
        .catch((error) => this.setLoading(false));
    },
    returnPromise () {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve({some: 'data'}), 2000);
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
