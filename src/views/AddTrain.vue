<template>
  <div>
    <button @click="createTrain">创建火车</button>
    <p>火车ID <input type="text" v-model="id"></p>
    <p>站台数量 <input type="number" v-model="stationCount"></p>
    <p>座位数量 <input type="number" v-model="seatCount"></p>

  </div>

  <div>
    <div v-for="index in stationCount" :key="index">
      <input type="text" :placeholder="'站台' + index + '->' + (index+1)">
    </div>
  </div>
  <div>
    <div v-for="index in stationCount" :key="index">
      <input type="text" :placeholder="'经停时间' + (index)">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      stationCount: 0,
      seatCount: 0
    }
  },
  methods: {
    createTrain() {
      // 在这里你可以添加创建火车的逻辑
    }
  }
}
</script>