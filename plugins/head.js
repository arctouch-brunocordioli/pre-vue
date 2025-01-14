import Vue from 'vue';

Vue.mixin({
  head() {
    return {
      title: this.title,
      meta: [{hid: 'og:title', property: 'og:title', content: this.title}],
      meta: [{hid: 'og:description', property: 'og:description', content: this.title}],
    };
  },
});
