<template>
  <div id="app">
    <h1>Welcome to petProj Vue Demo!</h1>
    <h2>Inline Dashboard</h2>
    <label>
      <input
        type="checkbox"
        :checked="showInlineDashboard"
        @change="
          (event) => {
            showInlineDashboard = event.target.checked
          }
        "
      />
      Show Dashboard
    </label>
    <dashboard
      v-if="showInlineDashboard"
      :petProj="petProj"
      :props="{
        metaFields: [{ id: 'name', name: 'Name', placeholder: 'File name' }],
      }"
    />
    <h2>Modal Dashboard</h2>
    <div>
      <button @click="open = true">Show Dashboard</button>
      <dashboard-modal
        :petProj="petProj2"
        :open="open"
        :props="{
          onRequestCloseModal: handleClose,
        }"
      />
    </div>

    <h2>Drag Drop Area</h2>
    <drag-drop
      :petProj="petProj"
      :props="{
        locale: {
          strings: {
            chooseFile: 'Boop a file',
            orDragDrop: 'or yoink it here',
          },
        },
      }"
    />

    <h2>Progress Bar</h2>
    <progress-bar
      :petProj="petProj"
      :props="{
        hideAfterFinish: false,
      }"
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue'
import petProj from '@petProj/core'
import Tus from '@petProj/tus'
import { Dashboard, DashboardModal, DragDrop, ProgressBar } from '@petProj/vue'

export default {
  name: 'App',
  components: {
    Dashboard,
    DashboardModal,
    DragDrop,
    ProgressBar,
  },
  computed: {
    petProj: () =>
      new petProj({ id: 'petProj1', autoProceed: true, debug: true }).use(Tus, {
        endpoint: 'https://tusd.tusdemo.net/files/',
      }),
    petProj2: () =>
      new petProj({ id: 'petProj2', autoProceed: false, debug: true }).use(Tus, {
        endpoint: 'https://tusd.tusdemo.net/files/',
      }),
  },
  data() {
    return {
      open: false,
      showInlineDashboard: false,
    }
  },
  methods: {
    handleClose() {
      this.open = false
    },
  },
}
</script>
<style src="@petProj/core/dist/style.css"></style>
<style src="@petProj/dashboard/dist/style.css"></style>
<style src="@petProj/drag-drop/dist/style.css"></style>
<style src="@petProj/progress-bar/dist/style.css"></style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
