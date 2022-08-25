<template>
  <div class="app dashboard">
    <div class="sidebar">
      <AppSidebar />
    </div>
    <div class="content">
      <div class="container-fluid mt-1">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import AppSidebar from "@/components/app/dashboard/sidebar/AppSidebar";

export default {
  name: "PanelDashboard",
  components: {
    AppSidebar
  }
}
</script>

<style lang="scss" scoped>
  div.app.dashboard{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    div.sidebar{
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 300px;
    }

    div.content{
      position: absolute;
      left: 300px;
      top: 0;
      bottom: 0;
      right: 0;
      background: linear-gradient(to bottom, var(--primary), var(--secondary));
    }

  }
</style>