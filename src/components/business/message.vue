<template>
  <van-popup
    v-model="visible"
    position="right"
    :safe-area-inset-bottom="true"
    :close-on-click-overlay="false"
    get-container="body"
  >
    <c-popup-layout title="分享资源" @back="close">
      <van-field
        v-model="form.content"
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
        <div class="stepper">以下内容需要：<van-field v-model="form.coin" />张福利卡解锁</div>
      </div>
      <van-field
        v-model="form.sec_content"
        rows="5"
        type="textarea"
        placeholder="和大家分享写什么呢"
        maxlength="2000"
        show-word-limit
        class="textarea"
      />
      <div class="upload">
        <van-uploader v-model="lockFileList" :max-count="3" :after-read="lockAfterRead" />
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
      <div class="btn-box"><van-button type="primary" @click="relese">发布</van-button></div>
    </c-popup-layout>
    <van-popup get-container="body" class="picker" v-model="selectVisible" round position="bottom">
      <van-picker
        title="发布到"
        show-toolbar
        value-key="cls_name"
        :columns="selectData"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
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
      form: {
        content: "",
        n_img: "",
        coin: 0,
        c_id: "",
        sec_img: "",
        sec_content: ""
      },
      target: "",
      fileList: [],
      lockFileList: [],
      selectData: [],
      selectVisible: false
    };
  },
  computed: {
    token() {
      return this.$store.state.token;
    }
  },
  created() {
    this.getCategory();
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.onCancel();
      this.visible = false;
      this.form = {
        content: "",
        n_img: "",
        coin: "",
        c_id: "",
        sec_img: "",
        sec_content: ""
      };
      this.target = "";
      this.fileList = [];
      this.lockFileList = [];
    },
    afterRead({ file }, { index }) {
      this.uploadImg(this.fileList, file, index);
    },
    lockAfterRead({ file }, { index }) {
      this.uploadImg(this.lockFileList, file, index);
    },
    uploadImg(list, file, index) {
      list.splice(index, 1);
      this.$set(list, index, {});
      let formData = new FormData();
      formData.append("file", file);
      this.$fetch
        .post("/Home/Create/upload_ajax_img", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(({ data }) => {
          list.splice(index, 1, {
            url: data.src,
            id: data.image_id
          });
        })
        .catch(() => {
          list.splice(index, 1, {
            status: "failed",
            message: "上传失败"
          });
        });
    },
    relese() {
      this.$fetch
        .form("/Home/Create/pub_add/mcode/ape5ed661dabd73f", {
          ...this.form,
          n_img: this.fileList.map(item => item.id).join(","),
          sec_img: this.lockFileList.map(item => item.id).join(",")
        })
        .then(() => {
          this.$notify({ type: "success", message: "发布成功" });
          this.onCancel();
        });
    },
    onConfirm(value, index) {
      this.form.c_id = this.selectData[index].c_id;
      this.target = this.selectData[index].cls_name;
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
    },
    getCategory() {
      this.$fetch.get("/Home/List/index/mcode/ape5ed70984a5af9").then(({ data }) => {
        this.selectData = data.table_data;
        this.selectData.forEach(item => {
          if (item.cls_name === "个人分享") {
            this.target = item.cls_name;
            this.form.c_id = item.c_id;
          }
        });
      });
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
.btn-box {
  text-align: center;
  padding-bottom: 30px;
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
