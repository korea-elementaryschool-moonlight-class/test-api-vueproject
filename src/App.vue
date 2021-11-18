<template>
  <h1 v-if="downloadData">{{ downloadData }}</h1>
  <h1 v-show="downloadData === 100">완성</h1>
</template>

<script>
import axios from 'axios'

export default {
  name: "App",
  components: {},
  data () {
    return {
      downloadData: null
    }
  },
  created () {
    this.fetchData()
    setInterval(this.fetchData, 100)
  },
  beforeUnmount() {
    clearInterval(this.fetchData)
  },
  methods: {
    fetchData () {
      axios.get('/api/').then((res) => {
        console.log(res)
        this.downloadData = res.data.status
      })
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  font-size: 40px;
  color: black;
}
h1{
  font-size: 2em;
}
</style>
