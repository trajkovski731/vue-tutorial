const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue",
      courseGoalA: 'This is course goal A',
      courseGoalB: '<h2>This is course goal B</h2>',
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB; 
      }
    },
  },
});
app.mount("#user-goal");
