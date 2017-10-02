<template>
  <div id="app">
    <h1>Vuex Loader</h1>
    <button @click="setLoading(true)">Enable Loading</button>
    <button @click="setLoading(false)">Disable Loading</button>
    <button @click="loadingExample">2 Second Loading</button>
    <loader />
  </div>
</template>

<script>

import Loader from './components/Loader';

import { mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    Loader
  },
  methods: {
    ...mapActions({
      setLoading: 'loader/setLoading'
    }),
    loadingExample () {
      this.setLoading(true);
      setTimeout(() => this.setLoading(false), 2000);
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
