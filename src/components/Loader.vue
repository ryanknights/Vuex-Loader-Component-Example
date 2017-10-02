<template>
  <div class="loader" v-if="isLoading">
    <span class="loader__message">Loading...</span>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'loader',
  computed: {
    ...mapGetters({
    	isLoading: 'loader/isLoading'
    })
  }
}
</script>

<style scoped>
	.loader
	{
		position : fixed;
		bottom : 100px;
		left : 0;
		right : 0;
	}
</style>
