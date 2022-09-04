<template>
  <div class="app music">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 mt-2">
          <div class="playlists box">
            <MusicPlaylists :playlists="viewData.playlists"/>
          </div>
        </div>
        <div class="col-6 mt-2">
          <div class="info box">
            <MusicTrack :track="viewData.track"/>
            <MusicDevices :devices="viewData.devices"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MusicPlaylists from "@/components/app/dashboard/apps/music/playlists/MusicPlaylists";
import MusicTrack from "@/components/app/dashboard/apps/music/track/MusicTrack";
import MusicDevices from "@/components/app/dashboard/apps/music/devices/MusicDevices";

export default {
  name: "MusicApp",
  components: {
    MusicPlaylists,
    MusicTrack,
    MusicDevices
  },
  data() {
    return {
      viewData: {
        track: null,
        playlists: [],
        devices: [],
      }
    }
  },
  mounted() {
    setInterval(() => {
      const Http = new XMLHttpRequest();
      const url = 'http://localhost:8089/apps/app/spotify/get_view';
      Http.open("GET", url, false);
      Http.send();
      this.viewData = JSON.parse(Http.responseText);
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
div.app.music {
  div.box {
    border-radius: 5px;
    background: #eeeeee;
    width: 100%;

    &.song {
      height: 550px;
    }

    &.info {
      height: 770px;
    }

    &.playlists {
      height: 770px;
    }
  }
}
</style>