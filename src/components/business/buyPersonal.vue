<template>
  <van-popup
    class="b-buy-personal"
    v-model="visible"
    position="right"
    lock-scroll
    :safe-area-inset-bottom="true"
    :close-on-click-overlay="false"
    :get-container="'body'"
  >
    <c-popup-layout title="福利卡购买者" @back="close">
      <div class="b-buy-persoanl">
        <ul class="fans">
          <li v-for="(user, index) in data" :key="index" class="fans-item">
            <img class="avatar" :src="user.avatar" />
            <div class="ceil name">{{ user.name }}</div>
            <div class="buy-num">购买{{ user.num }}张</div>
          </li>
        </ul>
      </div>
    </c-popup-layout>
  </van-popup>
</template>

<script>
import PopupLayout from "@/components/comm/PopupLayout";
export default {
  components: {
    "c-popup-layout": PopupLayout
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    follow(item) {
      this.$set(item, "state", item.state === 1 ? 0 : 1);
    },
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    }
  }
};
</script>

<style lang="less">
.b-buy-personal {
  font-size: 12px;
  .fans-item {
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
  .name {
    text-align: left;
    font-weight: 700;
  }
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .buy-num {
    color: #ffc000;
  }
}
</style>
