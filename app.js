const app = Vue.createApp({
  data() { 
    return {
      showBooks: true,
      books: [
        {
          title: 'The Lord of the Rings',
          author: 'Vedant Gonnade'
        },
        {
          title: 'The Lord of the Ears',
          author: 'Pooja Uke'
        },
        {
          title: 'The Lord of the Mouth',
          author: 'Bilal Baig'
        }
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks =!this.showBooks;
    },
    handleEvent(event, data) {
      console.log(event, event.type, data);
    }
  }
});

app.mount('#app');