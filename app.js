const app = Vue.createApp({
  data() { 
    return {
      showBooks: true,
      title: 'I am Ibmramovich',
      Author: "Some Author",
      age: 35,
      x: 0,
      y: 0
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks =!this.showBooks;
    },
    handleEvent(event, data) {
      console.log(event, event.type, data);
    },
    handleMouseMove(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});

app.mount('#app');