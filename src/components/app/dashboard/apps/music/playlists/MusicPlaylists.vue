<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 title">
        Playlist
      </div>
      <div class="col-6 search">
        <i class="bi bi-search"></i>
      </div>
    </div>
    <div class="row" style="overflow-y: auto; max-height: 700px">
      <div class="col-12">
        <div class="playlist d-flex mt-1" v-for="playlist in playlists" :key="playlist">
          <img v-if="playlist.images[0] !== undefined" :src="playlist.images[0].url" :alt="playlists.img">
          <img src="@/assets/images/apps/music/nopic.jpg" alt="no-picture" v-else>
          <div class="info">
            <div class="pl-title">{{ playlist.name }}</div>
            <div class="pl-subtitle">{{ playlist.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicPlaylists",
  mounted() {
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:8089/apps/app/spotify/get_authenticate_users_playlists';
    Http.open("GET", url, false);
    Http.send();
    this.playlists = JSON.parse(Http.responseText);
    console.log(this.playlists)
  },
  data() {
    return {
      playlists: []
    }
  }
}
</script>

<style lang="scss" scoped>
div.title {
  padding: 10px 12px;
  font-size: 22px;
}

div.search {
  padding: 12px;
  display: flex;
  justify-content: end;
}

div.playlist {
  background: var(--secondary);
  border-radius: 5px;
  height: 54px;
  width: 100%;

  img {
    height: 48px;
    width: 48px;
    margin: 3px;
  }

  div.info {
    margin-left: 5px;
    margin-top: 2px;
    color: white;

    width: 900%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    div.pl-subtitle {
      color: #d2d2d2;
    }
  }
}

</style>