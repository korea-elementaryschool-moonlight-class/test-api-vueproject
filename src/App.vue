<template>
  <div id="app">
    <video-background
      :src="require('@/assets/video.mp4')"
      style="width: 100vw; height: 100vh"
      ref="myvideo"
    >
      <div class="wrapper">
        <h1 class="font" v-if="downloadData" v-show="downloadData < 100">
          {{ Math.floor(downloadData) }}%
        </h1>
        <h1 class="font" v-show="downloadData === 100">소독 완료!</h1>
      </div>
    </video-background>
  </div>
</template>

<script>
import axios from "axios";
import VideoBackground from "vue-responsive-video-background-player";

export default {
  name: "App",
  components: {
    VideoBackground,
  },
  data() {
    return {
      downloadData: 0,
    };
  },
  created() {
    this.fetchData();
    setInterval(this.fetchData, 100);
  },
  mounted() {
    this.playVideo();
  },
  beforeUnmount() {
    clearInterval(this.fetchData);
  },

  methods: {
    fetchData() {
      axios.get("/api/").then((res) => {
        // console.log(res);
        this.downloadData = res.data.status;

        if (this.downloadData === 100) {
          this.stopVideo();
        } else {
          this.playVideo();
        }
      });
    },
    stopVideo() {
      this.$refs.myvideo.player.pause();
    },
    playVideo() {
      this.$refs.myvideo.player.play();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  padding-top: 10%;
}

.font {
  font-family: "Jua", sans-serif;
  font-size: 120px;
  color: #fff;
}
</style>
