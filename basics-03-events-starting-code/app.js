const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.counter = this.counter + 1
    },
    reduceCounter() {
      this.counter = this.counter - 1
    }
  }
});

app.mount('#events');
