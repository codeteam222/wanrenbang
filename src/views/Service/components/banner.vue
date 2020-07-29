<template>
  <div class="banner-box">
    <div class="banner" :style="{ 'background-color': bgColor }">
      <!-- <img src="@/assets/img/logo.png" alt="" /> -->
      <!-- <div class="text">{{ text }}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    link: {
      type: String
    },
    bgColor: {
      type: String
    }
  }
};
</script>
<style lang="less" scoped>
.banner-box {
  padding: 10px;
}
.banner {
  border-radius: 5px;
  height: 150px;
  padding: 12px;
  background-image: url("~@/assets/img/banner.png");
  background-size: 100% 150px;
  background-repeat: no-repeat;
}
img {
  width: 90px;
}
.text {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}
</style>
