<template>
  <van-popup
    class="b-sell"
    lock-scroll
    v-model="visible"
    position="right"
    :safe-area-inset-bottom="true"
    :close-on-click-overlay="false"
  >
    <c-popup-layout title="出售福利卡" @back="visible = false">
      <div class="sell-card">
        <van-field v-model="sellNum" center clearable :label="'您有' + cardNum + '张福利卡，想要出售'">
          <template #button>张</template>
        </van-field>
      </div>
      <van-field
        v-model="message"
        rows="5"
        type="textarea"
        label="心情："
        placeholder="说说你的心情"
        show-word-limit
        class="textarea"
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
  props: {
    cardNum: {
      type: Number,
      default: 0
    }
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
      sellNum: 0
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
      this.$emit("relese");
    }
  }
};
</script>

<style lang="less">
.b-sell {
  width: 100%;
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
    background-color: rgba(253, 179, 93, 1);
    color: #fff;
    border: none;
  }
  .sell-card {
    font-weight: 700;
    border-bottom: 1px solid rgb(195, 195, 195);
    .van-field__label {
      flex: 1;
      white-space: nowrap;
      width: auto;
      color: #000;
    }
    .van-field__button {
      color: #000;
    }
    .van-field__control {
      border: 1px solid rgb(195, 195, 195);
      text-align: center;
      color: #fdb35d;
    }
  }
  .textarea {
    .van-field__label {
      width: auto;
      color: #000;
      margin-right: 0;
      font-weight: 700;
    }
    &::after {
      display: none;
    }
  }
  .upload {
    border-bottom: 5px solid rgb(242, 242, 242);
    margin-top: 0px;
  }
}
</style>
