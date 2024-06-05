<template>
  <div class="query-ticket">
    <p>出发站 <input type="text" v-model="departure"/>
      到达站 <input type="text" v-model="arrival"/></p>
    <p>出发日期 <select v-model="month">
      <option v-for="(month,index) in months" :value="month" :key="index">
        {{ month }}
      </option>
    </select>
      月<select v-model="day">
        <option v-for="(day,index) in days" :value="day" :key="index">
          {{ day }}
        </option>
      </select>日

      <input type="radio" id="option1" value="1" v-model="is_time">
      <label for="option1">时间短优先</label>
      <input type="radio" id="option2" value="0" v-model="is_time">
      <label for="option2">票价低优先</label></p>
    <button @click="query_ticket">查询</button>
    <p>{{ result }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      departure: '',
      arrival: '',
      month: 6,
      day: 1,
      months: [6, 7, 8],
      days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      is_time: "1",
      result: "",
      timestamp: 646
    };
  },

  methods: {
    query_ticket() {
      this.$axios({
        method: 'post',
        url: "http://localhost:8090/about",
        data: {
          string: "[" + (this.timestamp) + "] query_ticket -s " + this.departure + " -t "
              + this.arrival + " -d 0" + this.month + "-" + (this.day < 10 ? "0" : "")
              + this.day + " -p " + (this.is_time === "0" ? "cost" : "time")
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
