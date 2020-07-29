<template>
  <b-about-popup ref="project"></b-about-popup>
</template>

<script>
import BAboutPopup from "@/components/business/about";
export default {
  components: {
    "b-about-popup": BAboutPopup
  },
  data() {
    return {
      projectTabs: [
        {
          title: "所有项目",
          name: "all"
        },
        {
          title: "我入股的项目",
          name: "my"
        },
        {
          title: "股权交易中心",
          name: "center"
        }
      ]
    };
  },
  mounted() {
    this.$refs.project.open({
      type: "project",
      tabs: this.projectTabs,
      duration: "0",
      back: () => this.$router.push({ name: "Personal" })
    });
  }
};
</script>

<style></style>
