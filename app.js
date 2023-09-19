const app = Vue.createApp({
  data() { 
    return {
      showBooks: true,
      title: 'I am Ibmramovich',
      Author: "Some Author",
      age: 35
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks =!this.showBooks;
    }
  }
});

app.mount('#app');