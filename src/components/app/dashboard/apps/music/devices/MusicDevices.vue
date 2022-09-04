<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mt-2">
        <div class="line"/>
      </div>
      <div class="col-12" style="overflow-y: auto; height: 210px">
        <div class="device mt-1 d-flex" v-for="device in devices" :key="device">
          <i class="bi bi-laptop" v-if="device.type.toLowerCase() === 'computer'"></i>
          <i class="bi bi-phone" v-if="device.type.toLowerCase() === 'smartphone'"></i>
          <i class="bi bi-tablet" v-if="device.type.toLowerCase() === 'tablet'"></i>
          <i class="bi bi-speaker" v-if="device.type.toLowerCase() === 'speaker'"></i>
          <i class="bi bi-tv" v-if="device.type.toLowerCase() === 'tv'"></i>
          <div style="margin-left: 10px; font-size: 12px;">{{ device.name }}</div>
          <div v-if="device.is_active === true" style="position: absolute; right: 30px">
            <MusicPlayingEffect/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MusicPlayingEffect from "@/components/app/dashboard/apps/music/_vendor/MusicPlayingEffect";

export default {
  name: "MusicDevices",
  components: {MusicPlayingEffect},
  props: ['devices'],
}
</script>

<style lang="scss" scoped>
div.device {
  width: 100%;
  height: 36px;
  border-radius: 5px;

  padding-top: 14px;
  padding-left: 10px;

  div{
    margin-top: 3px
  }

  i {
    margin-top: -5px;
    font-size: 24px;
  }

}
</style>