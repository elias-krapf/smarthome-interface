<template>
  <div class="notification" v-for="notification in notifications" :key="notification" >
    <div class="notify-controller">
      <i class="bi bi-x-lg"></i>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mt-1">
          <span class="title">{{ notification.title }}</span>
        </div>
        <div class="col-12 mt-1" v-html="notification.content"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PanelNotification",
  data() {
    return {
      notifications: []
    }
  },
  mounted() {
    this.emitter.on('notify', notify => {
      this.notifications.push(notify);
    })
  },
}
</script>

<style lang="scss" scoped>

div.notify-controller {
  position: absolute;
  right: 16px;
  top: 14px;
}

div.notification {
  min-width: 200px;
  min-height: 80px;
  background: #eeeeee;
  margin: 10px;
  border-radius: 5px;

  span.title{
    font-weight: bold;
    color: var(--primary)
  }
}

</style>