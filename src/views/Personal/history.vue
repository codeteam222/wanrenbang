<template>
  <div class="wrapper personal-history">
    <b-history ref="history"></b-history>
  </div>
</template>

<script>
import Bhistory from "@/components/business/history";
export default {
  components: {
    "b-history": Bhistory
  },
  data() {
    return {
      tabs: [
        {
          title: "历史参与记录",
          name: "join"
        },
        {
          title: "历史幸运锦鲤",
          name: "koiFish"
        },
        {
          title: "充值记录",
          name: "recharge"
        },
        {
          title: "提现记录",
          name: "withdraw"
        }
      ]
    };
  },
  mounted() {
    this.$refs.history.open({
      tabs: this.tabs,
      duration: "0",
      title: "历史记录",
      type: "join",
      back: () => this.$router.push({ name: "Personal" })
    });
  }
};
</script>

<style lang="less">
.personal-history {
  font-size: 14px;
  text-align: left;
}
</style>
