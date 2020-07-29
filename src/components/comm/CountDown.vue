<template>
  <div class="c-countdown">
    <template v-if="type === 'block'">
      <span v-for="(num, index) in timeTxt" :key="index" class="item" :class="{ 'is-num': num !== ':', 'is-t': num === ':' }">
        {{ num }}
      </span>
    </template>
    <template v-else>
      {{ timeTxt.join("") }}
    </template>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "block"
    },
    remainTime: {
      // 倒计时间总秒数
      default: ""
    }
  },
  data() {
    return {
      hour: "",
      minute: "",
      second: "",
      promiseTimer: ""
    };
  },

  computed: {
    hourString() {
      return this.formatNum(this.hour);
    },
    minuteString() {
      return this.formatNum(this.minute);
    },
    secondString() {
      return this.formatNum(this.second);
    },
    timeTxt() {
      return [
        ...this.hourString.split(""),
        ":",
        ...this.minuteString.split(""),
        ":",
        ...this.secondString.split("")
      ];
    }
  },
  mounted() {
    if (this.remainTime > 0) {
      this.hour = Math.floor(this.remainTime / 3600);
      this.minute = Math.floor((this.remainTime / 60) % 60);
      this.second = Math.floor(this.remainTime % 60);
      this.countDowm();
    }
  },
  methods: {
    countDowm() {
      var self = this;
      clearInterval(this.promiseTimer);
      this.promiseTimer = setInterval(function() {
        if (self.hour === 0) {
          if (self.minute !== 0 && self.second === 0) {
            self.second = 59;
            self.minute -= 1;
          } else if (self.minute === 0 && self.second === 0) {
            self.second = 0;
            self.$emit("end");
            clearInterval(self.promiseTimer);
          } else {
            self.second -= 1;
          }
        } else {
          if (self.minute !== 0 && self.second === 0) {
            self.second = 59;
            self.minute -= 1;
          } else if (self.minute === 0 && self.second === 0) {
            self.hour -= 1;
            self.minute = 59;
            self.second = 59;
          } else {
            self.second -= 1;
          }
        }
      }, 1000);
    },
    formatNum(num) {
      return num < 10 ? "0" + num : "" + num;
    }
  }
};
</script>
<style lang="less" scoped>
.c-countdown {
  display: flex;
  justify-content: center;
  align-items: center;
}
.is-t{
  margin: 0 5px;
}
</style>
