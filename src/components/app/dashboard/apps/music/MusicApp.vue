<template>
  <div class="app music">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 mt-2">
          <div class="playlists box">
            <MusicPlaylists/>
          </div>
        </div>
        <div class="col-6 mt-2">
          <div class="info box">

          </div>
          <div class="song box" style="margin-top: 20px">
            <MusicTrack />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MusicPlaylists from "@/components/app/dashboard/apps/music/playlists/MusicPlaylists";
import MusicTrack from "@/components/app/dashboard/apps/music/track/MusicTrack";

export default {
  name: "MusicApp",
  components: {
    MusicPlaylists,
    MusicTrack
  },
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

    &.info{
      height: 200px;
    }

    &.playlists {
      height: 770px;
    }
  }
}
</style>