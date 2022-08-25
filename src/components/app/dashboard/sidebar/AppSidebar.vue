<template>
  <div class="dashboard sidebar">
    <div class="header d-flex">
      <div class="time text">12:35</div>
      <div class="date text">Freitag 27. März</div>
    </div>
    <div class="content">
      <div class="container-fluid" style="padding-left: 5px !important;">
        <div class="row">
          <div class="col-12">
            <span class="title">Zuhause</span>
          </div>
          <div class="col-12 mt-1">
            <router-link to="/" class="card">
              <div class="icon">
                <i class="bi bi-house"></i>
              </div>
              <div class="name">
                Übersicht
              </div>
            </router-link>
            <router-link to="/devices" class="card">
              <div class="icon">
                <i class="bi bi-lightbulb"></i>
              </div>
              <div class="name">
                Geräte
              </div>
            </router-link>
            <router-link to="/security" class="card">
              <div class="icon">
                <i class="bi bi-lock"></i>
              </div>
              <div class="name">
                Sicherheit
              </div>
            </router-link>
            <router-link to="/settings" class="card">
              <div class="icon">
                <i class="bi bi-gear"></i>
              </div>
              <div class="name">
                Einstellungen
              </div>
            </router-link>
          </div>
          <div class="col-12 mt-2">
            <span class="subtitle">Apps</span>
          </div>
          <div class="col-12 mt-1">
            <router-link to="/app/weather" class="card">
              <div class="icon">
                <i class="bi bi-cloud"></i>
              </div>
              <div class="name">
                Wetter
              </div>
            </router-link>
            <router-link to="/app/music" class="card">
              <div class="icon">
                <i class="bi bi-soundwave"></i>
              </div>
              <div class="name">
                Musik
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSidebar",
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
div.dashboard.sidebar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: #eeeeee;

  div.header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 20px;

    div.text {
      color: black;
      font-size: 10px;
      margin: 5px 5px 10px;
    }
  }

  div.content {
    position: absolute;
    top: 50px;
    right: 0;
    left: 0;
    bottom: 0;

    span {
      font-weight: bold;

      &.title {
        font-size: 20px;
      }

      &.subtitle {
        font-size: 16px;
      }
    }


    a.card {
      height: 52px;
      width: 100%;
      border-radius: 10px;
      display: flex;

      &.active {
        background: var(--primary);
        color: white;
      }

      div {
        margin-top: 12px;

        &.icon {
          margin-left: 5px;

          i {
            font-size: 18px;
          }
        }

        &.name {
          margin-left: 6px;
          padding-top: 1px;
        }
      }
    }
  }
}
</style>