<template>
  <van-popup
    v-model="visible"
    position="right"
    :safe-area-inset-bottom="true"
    :close-on-click-overlay="false"
  >
    <c-popup-layout title="分享资源" @back="visible = false">
      <van-field
        v-model="message"
        rows="5"
        type="textarea"
        placeholder="和大家分享写什么呢"
        maxlength="2000"
        show-word-limit
        class="textarea"
      />
      <div class="upload">
        <van-uploader v-model="fileList" multiple :max-count="3" :after-read="afterRead" />
      </div>
      <div class="rule">
        <div class="desc"><van-icon name="info-o" />发帖规范</div>
        <div class="stepper">需要福利卡解锁：<van-field v-model="buyNumber" />张</div>
      </div>

      <van-button type="primary" @click="relese">发布</van-button>
    </c-popup-layout>
  </van-popup>
</template>

<script>
import PopupLayout from "@/components/comm/PopupLayout";
export default {
  components: {
    "c-popup-layout": PopupLayout
  },
  data() {
    return {
      visible: false,
      message: "",
      fileList: [
        {
          url: "https://img.yzcdn.cn/vant/leaf.jpg",
          status: "uploading",
          message: "上传中..."
        },
        {
          url: "https://img.yzcdn.cn/vant/tree.jpg",
          status: "failed",
          message: "上传失败"
        }
      ],
      buyNumber: 0
    };
  },
  computed: {
    token() {
      return this.$store.state.token;
    }
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    afterRead(file) {
      console.log(file);
    },
    relese() {
      this.$emit("release");
    }
  }
};
</script>

<style lang="less">
.van-popup--right {
  width: 100%;
}
.upload {
  text-align: left;
  padding: 10px;
  margin-top: 40px;
}
.van-button--primary {
  width: 100px;
  height: 35px;
  line-height: 35px;
  margin-top: 30px;
  border-radius: 10px;
}
.rule {
  text-align: left;
  font-size: 12px;
  padding: 0 12px;
  // .stepper {
  //   display: flex;
  //   justify-content: flex-start;
  //   align-items: center;
  //   margin-bottom: 10px;
  // }
  .van-cell {
    width: 100px;
    padding: 0;
    display: inline-block;
    vertical-align: middle;
  }
  .desc {
    font-size: 8px;
    margin-bottom: 7px;
    .van-icon-info-o {
      font-size: 10px;
      vertical-align: middle;
      margin-right: 3px;
    }
  }
  .stepper {
    font-weight: 700;
  }
  // .van-stepper__input{
  //   width: 100px;
  //   color: #000000;
  //   background: #fff;
  //   height: 32px;
  //   border: 1px solid #f2f3f5;
  //   margin: 0 2px;
  //   text-align: center;
  // }
  .van-field__control {
    width: 100px;
    color: #000000;
    background: #fff;
    height: 32px;
    border: 1px solid #f2f3f5;
    margin-right: 5px;
    text-align: center;
    height: 30px;
    font-weight: 500;
  }
}
</style>
