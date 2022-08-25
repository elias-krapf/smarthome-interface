<template>
  <div class="default background" @click="leaveScreensaver">
    <div class="box">
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
    <div class="clock">
      <span>{{ time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PanelScreensaver",
  data() {
    return {
      time: "Lade..."
    }
  },
  methods: {
    formatNumber(number) {
      return number > 9 ? number : '0' + number;
    },
    getTimeFormatted() {
      let today = new Date();
      return this.formatNumber(today.getHours()) + ":" + this.formatNumber(today.getMinutes()) + ":" + this.formatNumber(today.getSeconds());
    },
    leaveScreensaver(){
      window.location = "/dashboard";
    }
  },
  mounted() {
    setInterval(() => {
      this.time = this.getTimeFormatted();
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>

div.clock {
  position: absolute;
  width: 400px;
  text-align: center;
  left: calc(50% - 200px);
  top: 28%;

  span {
    text-align: center;
    color: white;
    font-size: 72px;
  }

}

.background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background: -webkit-linear-gradient(to bottom, var(--primary), var(--secondary));
  background: linear-gradient(to bottom, var(--primary), var(--secondary));
}

.box div {
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: transparent;
  border: 6px solid var(--third);
}

.box div:nth-child(1) {
  top: 12%;
  left: 42%;
  animation: animate 10s linear infinite;
}

.box div:nth-child(2) {
  top: 70%;
  left: 50%;
  animation: animate 7s linear infinite;
}

.box div:nth-child(3) {
  top: 17%;
  left: 6%;
  animation: animate 9s linear infinite;
}

.box div:nth-child(4) {
  top: 20%;
  left: 60%;
  animation: animate 10s linear infinite;
}

.box div:nth-child(5) {
  top: 67%;
  left: 10%;
  animation: animate 6s linear infinite;
}

.box div:nth-child(6) {
  top: 80%;
  left: 70%;
  animation: animate 12s linear infinite;
}

.box div:nth-child(7) {
  top: 60%;
  left: 80%;
  animation: animate 15s linear infinite;
}

.box div:nth-child(8) {
  top: 32%;
  left: 25%;
  animation: animate 16s linear infinite;
}

.box div:nth-child(9) {
  top: 90%;
  left: 25%;
  animation: animate 9s linear infinite;
}

.box div:nth-child(10) {
  top: 20%;
  left: 80%;
  animation: animate 5s linear infinite;
}

@keyframes animate {
  0% {
    transform: scale(0) translateY(-90px) rotate(360deg);
    opacity: 1;
  }

  100% {
    transform: scale(1.3) translateY(-90px) rotate(-180deg);
    border-radius: 50%;
    opacity: 0;
  }
}
</style>