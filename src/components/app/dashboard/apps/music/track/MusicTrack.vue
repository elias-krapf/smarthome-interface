<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-center mt-2">
        <img src="@/assets/images/x.jpeg" alt="">
      </div>
      <div class="col-12 mt-2">
        <div class="title">Love Grows (Where My Roesemary Goes)</div>
      </div>
      <div class="col-12">
        <div class="subtitle">
          Edison Lighthouse
        </div>
      </div>
      <div class="col-12">
        <input type="range" min="0" max="100">
      </div>
      <div class="col-12 d-flex">
        <div class="track-time current">
          1:03
        </div>
        <div class="track-time">
          2:04
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicTrack"
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