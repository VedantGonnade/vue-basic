<template>
  <h1>{{ title }}</h1>
  <br>
  <div v-if="showModel">
    <Modal :header="header" :text="text" theme="sale" @closeModal="toggleModal"/>
  </div>
  <button @click="toggleModal">open modal</button>
</template>

<script>
import Modal from "./components/Modal";

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'my First Vue app',
      header: "Signup for a giveaway",
      text: "grab your goodies!!",
      showModel: false
    }
  },
  methods: {
    toggleModal() {
      this.showModel = !this.showModel
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
