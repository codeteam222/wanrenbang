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
      <div class="rule rule-1">
        <div class="stepper">以下内容需要：<van-field v-model="buyNumber" />张福利卡解锁</div>
      </div>
      <van-field
        v-model="message2"
        rows="5"
        type="textarea"
        placeholder="和大家分享写什么呢"
        maxlength="2000"
        show-word-limit
        class="textarea"
      />
      <div class="upload">
        <van-uploader v-model="fileList2" multiple :max-count="3" :after-read="afterRead" />
      </div>
      <div class="rule">
        <div class="stepper" @click="openSelect">
          发布到：<span class="platform"
            ><label for="">{{ target }}</label
            ><van-icon name="arrow-down"
          /></span>
        </div>
        <div class="desc" @click="openRule"><van-icon name="info-o" />发帖规范</div>
      </div>
      <van-button type="primary" @click="relese">发布</van-button>
    </c-popup-layout>
    <van-popup get-container="body" class="picker" v-model="selectVisible" round position="bottom">
      <van-picker title="发布到" show-toolbar :columns="selectData" @confirm="onConfirm" @cancel="onCancel" />
    </van-popup>
    <Rule ref="rule"></Rule>
  </van-popup>
</template>
<script>
import PopupLayout from "@/components/comm/PopupLayout";
import Rule from "./rule";
export default {
  components: {
    "c-popup-layout": PopupLayout,
    Rule
  },
  data() {
    return {
      visible: false,
      message: "",
      message2: "",
      target: "个人分享",
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
      fileList2: [
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
      buyNumber: 0,
      selectData: [
        "生活服务",
        "休闲娱乐",
        "教育培训",
        "特价商品",
        "美食",
        "汽车",
        "商业代办",
        "金融服务",
        "农副产品",
        "个人分享"
      ],
      selectVisible: false
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
    },
    onConfirm(value) {
      this.target = value;
      this.onCancel();
    },
    onCancel() {
      this.selectVisible = false;
    },
    openSelect() {
      this.selectVisible = true;
    },
    openRule() {
      this.$refs.rule.open();
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
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    font-size: 10px;
    color: #333333;
    height: 20px;
    line-height: 20px;
    .van-icon-info-o {
      font-size: 10px;
      vertical-align: middle;
      margin-right: 3px;
      margin-top: -1px;
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
.platform {
  border: 1px solid #f2f3f5;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding: 0 5px;
  label {
    display: inline-block;
    min-width: 90px;
    font-weight: 500;
  }
}
.rule-1 {
  border-top: 5px solid rgb(242, 242, 242);
  padding-top: 15px;
}
</style>
