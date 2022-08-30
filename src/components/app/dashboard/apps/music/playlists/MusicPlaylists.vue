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
    <div class="row">
      <div class="col-12">
        <div class="playlist d-flex mt-1" v-for="playlist in playlists" :key="playlist">
          <img :src="playlist.img" :alt="playlists.img">
          <div class="info">
            <div class="pl-title">{{ playlist.title }}</div>
            <div class="pl-subtitle">{{ playlist.subtitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicPlaylists",
  data() {
    return {
      playlists: [
        {
          img: '@/assets/images/x.jpeg',
          title: 'Cool & Fresh',
          subtitle: 'Album - Julian Bam',
        },
        {
          img: '@/assets/images/x.jpeg',
          title: 'Programmieren',
          subtitle: 'Playlist - Ekrapf',
        }

      ]
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

    div.pl-subtitle {
      color: #d2d2d2;
    }
  }
}

</style>