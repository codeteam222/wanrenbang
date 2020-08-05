<template>
  <div class="wrapper personal-follow">
    <b-collection ref="collection"></b-collection>
  </div>
</template>

<script>
import BCollection from "@/components/business/collection";
export default {
  components: {
    "b-collection": BCollection
  },
  data() {
    return {
      tabs: [
        {
          title: "我的收藏",
          name: "collection"
        },
        {
          title: "我的关注",
          name: "follow"
        },
        {
          title: "我的分享",
          name: "share"
        }
      ]
    };
  },
  mounted() {
    this.$refs.collection.open({
      tabs: this.tabs,
      duration: "0",
      type: "collection",
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
