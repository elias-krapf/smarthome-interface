<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-center mt-2">
        <img :src="getTrackImage" alt="">
      </div>
      <div class="col-12 mt-2">
        <div class="title"> {{ getTrackTitle }}</div>
      </div>
      <div class="col-12">
        <div class="subtitle">
          {{ getTrackArtists }}
        </div>
      </div>
      <div class="col-12">
        <input type="range" min="0" max="100" :value="getTimeProgress">
      </div>
      <div class="col-12 d-flex">
        <div class="track-time current">
          {{ getDurationTime }}
        </div>
        <div class="track-time">
          {{ getProgressTime }}
        </div>
      </div>
      <div class="col-12 mt-2">
        <div class="container-fluid" style="font-size: 24px">
          <div class="row d-flex justify-content-center">
            <div class="col-2 d-flex justify-content-center">
              <i class="bi bi-shuffle"></i>
            </div>
            <div class="col-2 d-flex justify-content-center" style="margin-left: 30px">
              <i class="bi bi-caret-left"></i>
            </div>
            <div class="col-2 d-flex justify-content-center">
              <i class="bi bi-pause"></i>
            </div>
            <div class="col-2 d-flex justify-content-center" style="margin-right: 30px">
              <i class="bi bi-caret-right"></i>
            </div>
            <div class="col-2 d-flex justify-content-center">
              <i class="bi bi-arrow-repeat"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicTrack",
  data() {
    return {
      track: null,
    }
  },
  computed: {
    getTrackImage() {
      if (this.track === null) {
        return '-';
      }

      let item = this.track['item'];
      let album = item['album'];
      let images = album['images'];
      return images[0]['url'];
    },
    getTrackTitle() {
      if (this.track === null) {
        return '-';
      }

      let item = this.track['item'];
      return item['name'];
    },
    getTrackArtists() {
      if (this.track === null) {
        return '-';
      }

      let artistNames = [];
      let item = this.track['item'];
      let artists = item['artists'];
      artists.forEach(artist => {
        artistNames.push(artist.name);
      });

      return artistNames.join(", ");
    },
    getProgressTime() {
      if (this.track === null) {
        return '-';
      }

      let progress = this.track['progress_ms'];
      return this.timeConvert(progress / 1000 / 60);

    },
    getDurationTime() {
      if (this.track === null) {
        return '-';
      }
      let item = this.track['item'];
      let duration = item['duration_ms'];
      return this.timeConvert(duration / 1000 / 60);
    },
    getTimeProgress() {
      if (this.track === null) {
        return 0;
      }

      let item = this.track['item'];
      let duration = item['duration_ms'];
      let progress = this.track['progress_ms'];

      let dSec = Number(duration) / 1000;
      let pSec = Number(progress) / 1000;
      return Math.round(pSec / (dSec / 100));
    }
  },
  methods: {
    timeConvert(minutes) {
      let sign = minutes < 0 ? "-" : "";
      let min = Math.floor(Math.abs(minutes));
      let sec = Math.floor((Math.abs(minutes) * 60) % 60);
      return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
    }
  },
  mounted() {
    setInterval(() => {
      const Http = new XMLHttpRequest();
      const url = 'http://localhost:8089/apps/app/spotify/get_current_track';
      Http.open("GET", url, false);
      Http.send();
      this.track = JSON.parse(Http.responseText);
      console.log(this.track)
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 98%;
  align-items: center;
}

div.title {
  font-weight: bold;
  font-size: 20px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

input {
  width: 100%;
}

input[type=range] {
  transition: 1s !important;
  -webkit-appearance: none;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 300px;
  height: 5px;
  background: #ddd;
  border: none;
  border-radius: 3px;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: var(--primary);
  margin-top: -4px;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: #ccc;
}

div.track-time {
  font-size: 12px;


  &.current {
    position: absolute;
    right: 14px;
  }
}

</style>