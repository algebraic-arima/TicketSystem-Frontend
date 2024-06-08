<template>
  <div>
    <p>火车ID <input type="text" v-model="id"></p>
    <button @click="release_train">发布火车</button>
    <p>{{ result }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      result: '',
      timestamp: 646
    };
  },

  methods: {
    release_train() {
      this.$axios({
        method: 'post',
        url: "http://localhost:8090/about",
        data: {
          string: "[" + (this.timestamp) + "] release_train -i " + this.id
        },
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(response => {
        console.log(response.string);
        this.result = response.data.string;
      }).catch(error => {
        console.log(error);
      });
    }
  }
};
</script>