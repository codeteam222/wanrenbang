<template>
  <div class="personal-follow">
    <c-popup-layout title="我的粉丝" @back="$router.push({ name: 'Personal' })">
      <b-fans></b-fans>
    </c-popup-layout>
  </div>
</template>

<script>
import PopupLayout from "@/components/comm/PopupLayout";
import BFans from "@/components/business/fans";
export default {
  components: {
    "c-popup-layout": PopupLayout,
    "b-fans": BFans
  }
};
</script>

<style lang="less" scoped>
.personal-index {
  font-size: 12px;
}
.follow-item {
  display: flex;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.ceil {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.button {
  width: 70px;
  padding: 0;
  height: 25px;
  line-height: 25px;
}
.name {
  text-align: left;
  font-weight: 700;
}
.follow-0 {
  background-color: rgba(109, 117, 241, 1);
}
.follow-1 {
  background-color: rgba(252, 140, 168, 1);
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
