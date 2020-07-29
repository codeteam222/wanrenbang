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
        maxlength="200"
        show-word-limit
      />
      <div class="upload">
        <van-uploader v-model="fileList" multiple :max-count="3" :after-read="afterRead" />
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
      ]
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
</style>
