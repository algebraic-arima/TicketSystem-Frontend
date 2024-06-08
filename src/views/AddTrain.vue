<template>
  <div>
    <p>火车ID <input type="text" v-model="id"></p>
    <p>站台数量 <input type="number" v-model="stationCount"></p>
    <p>座位数量 <input type="number" v-model="seatCount"></p>
    <p>站台名 <input type="text" v-model="stationName"></p>
    <p>票价 <input type="text" v-model="price"></p>
    <p>发车时间 <input type="text" v-model="startTime"></p>
    <p>经过时间 <input type="text" v-model="travelTime"></p>
    <p>停车时间 <input type="text" v-model="stopoverTime"></p>
    <p>发售日期 <select v-model="s_month">
      <option v-for="(month,index) in months" :value="month" :key="index">
        {{ month }}
      </option>
    </select>
      月<select v-model="s_day">
        <option v-for="(day,index) in days" :value="day" :key="index">
          {{ day }}
        </option>
      </select>日——
      <select v-model="t_month">
        <option v-for="(month,index) in months" :value="month" :key="index">
          {{ month }}
        </option>
      </select>
      月<select v-model="t_day">
        <option v-for="(day,index) in days" :value="day" :key="index">
          {{ day }}
        </option>
      </select>日
    </p>
  </div>
  <p>火车类型 <input type="text" v-model="type"></p>
  <button @click="add_train">创建火车</button>
  <p>{{ result }}</p>

<!--  <div>-->
<!--    <div v-for="index in stationCount" :key="index">-->
<!--      <input type="text" :placeholder="'站台' + index + '->' + (index+1)">-->
<!--    </div>-->
<!--  </div>-->
<!--  <div>-->
<!--    <div v-for="index in stationCount" :key="index">-->
<!--      <input type="text" :placeholder="'经停时间' + (index)">-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
export default {
  data() {
    return {
      id: '',
      stationCount: 0,
      seatCount: 0,
      stationName: '',
      price: '',
      startTime: '',
      travelTime: '',
      stopoverTime: '',
      s_month: 6,
      s_day: 1,
      t_month: 8,
      t_day: 31,
      type: '',
      months: [6, 7, 8],
      days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      timestamp: 53,
      result: ""
    }
  },
  methods: {
    add_train() {
      this.$axios({
        method: 'post',
        url: "http://localhost:8090/about",
        data: {
          string: "[" + (this.timestamp) + "] add_train -i " + this.id
              + " -n " + this.stationCount + " -m " + this.seatCount
              + " -s " + this.stationName + " -p " + this.price
              + " -x " + this.startTime + " -t " + this.travelTime
              + " -o " + this.stopoverTime
              + " -d 0" + this.s_month + "-" + (this.s_day < 10 ? "0" : "") + this.s_day
              + "|0" + this.t_month + "-" + (this.t_day < 10 ? "0" : "") + this.t_day
              + " -y " + this.type
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

}
</script>