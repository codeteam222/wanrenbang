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
        <van-field
          v-model="sell_num"
          center
          clearable
          :label="'您有' + userInfo.card_count + '张福利卡，想要出售'"
        >
          <template #button>张</template>
        </van-field>
      </div>
      <div class="sell-card default-field">
        <van-field v-model="card_price" center label="单价：">
          <template #button>元</template>
        </van-field>
      </div>
      <van-field
        v-model="content"
        rows="5"
        type="textarea"
        label="心情："
        placeholder="说说你的心情"
        show-word-limit
        class="textarea"
      />
      <div class="upload">
        <van-uploader v-model="fileList" :max-count="3" :after-read="afterRead" />
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
      content: "",
      card_price: "",
      fileList: [],
      sell_num: 0
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
      this.sell_num = 0;
      this.fileList = [];
      this.content = "";
    },
    afterRead({ file }, { index }) {
      this.fileList.splice(index, 1);
      this.$set(this.fileList, index, {});
      let formData = new FormData();
      formData.append("file", file);
      this.$fetch
        .post("/Home/Create/upload_ajax_img", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(({ data }) => {
          this.fileList.splice(index, 1, {
            url: data.src,
            id: data.image_id
          });
        })
        .catch(() => {
          this.fileList.splice(index, 1, {
            status: "failed",
            message: "上传失败"
          });
        });
    },
    relese() {
      this.$fetch
        .form("/Home/Create/pub_add/mcode/ape5ed661dabd73f", {
          sell_num: this.sell_num,
          n_img: this.fileList.map(item => item.id).join(","),
          content: this.content,
          card_price: this.card_price,
          is_card: 1
        })
        .then(() => {
          this.$store.dispatch("GetUserInfo");
          this.$emit("success");
          this.$notify({ type: "success", message: "发布成功" });
          this.close();
        })
        .catch(({ msg }) => {
          this.$notify({ type: "warning", message: msg });
        });
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
  .default-field {
    .van-field__label {
      flex: 0;
      width: 50px;
    }
    .van-field__body {
      width: 100px;
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
