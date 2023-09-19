const app = Vue.createApp({
  data() { 
    return {
      showBooks: true,
      books: [
        {
          title: 'The Lord of the Rings',
          author: 'Vedant Gonnade',
          img: 'assets/1.jpg',
        },
        {
          title: 'The Lord of the Ears',
          author: 'Pooja Uke',
          img: 'assets/2.jpg',
        },
        {
          title: 'The Lord of the Mouth',
          author: 'Bilal Baig',
          img: 'assets/3.jpg',
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