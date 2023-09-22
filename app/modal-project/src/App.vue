<template>
  <h1>{{ title }}</h1>
  <br>
  <teleport to=".modals" v-if="showModel">
    <Modal theme="sale" @closeModal="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
      </template>
      <h1>First Modal</h1>
    </Modal>
  </teleport>

  <teleport to=".modals" v-if="showSecondModel">
    <Modal theme="sale" @closeModal="toggleSecondModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
      </template>
      <h1>Second Modal</h1>
    </Modal>
  </teleport> 
  <button @click="toggleModal">open modal</button>
  <button @click="toggleSecondModal">second modal</button>
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
      showModel: false,
      showSecondModel: false
    }
  },
  methods: {
    toggleModal() {
      this.showModel = !this.showModel
    },
    toggleSecondModal() {
      this.showSecondModel =!this.showSecondModel
    }
  }
}
</script>

<style>
#app, .modals {
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
