<template>
  <div class="wrapper personal-fund">
    <b-fund ref="history"></b-fund>
  </div>
</template>

<script>
import Bfund from "@/components/business/fund";
export default {
  components: {
    "b-fund": Bfund
  },
  data() {
    return {
      tabs: [
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
      title: "充值记录",
      type: "recharge",
      back: () => this.$router.push({ name: "Personal" })
    });
  }
};
</script>

<style lang="less">
.personal-fund {
  font-size: 14px;
  text-align: left;
}
</style>
