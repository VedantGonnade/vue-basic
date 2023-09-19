const app = Vue.createApp({
  data() { 
    return {
      showBooks: true,
      books: [
        {
          title: 'The Lord of the Rings',
          author: 'Vedant Gonnade',
          img: 'assets/1.jpg',
          isFav: true
        },
        {
          title: 'The Lord of the Ears',
          author: 'Pooja Uke',
          img: 'assets/2.jpg',
          isFav: true
        },
        {
          title: 'The Lord of the Mouth',
          author: 'Bilal Baig',
          img: 'assets/3.jpg',
          isFav: true
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
    },
    toggleFavBook(book) {
      book.isFav = !book.isFav;
    }
  },

  computed: {
    filteredBooks() {
      return this.books.filter(book => book.isFav;
    }
  }
});

app.mount('#app');