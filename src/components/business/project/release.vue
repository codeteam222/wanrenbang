<template>
  <div class="project-relase">
    <van-popup
      class="project-release-popup"
      v-model="visible"
      position="right"
      :safe-area-inset-bottom="true"
      :close-on-click-overlay="false"
      get-container="body"
    >
      <c-popup-layout title="发布项目" @back="close">
        <c-form
          ref="form"
          :data="data"
          :form="form"
          :rules="rules"
          label-width="100px"
          label-position="top"
        ></c-form>
      </c-popup-layout>
    </van-popup>
  </div>
</template>

<script>
import PopupLayout from "@/components/comm/PopupLayout";
import CForm from "@/components/comm/Form.vue";
export default {
  components: {
    "c-form": CForm,
    "c-popup-layout": PopupLayout
  },
  data() {
    return {
      visible: false,
      data: {
        pr_img: "",
        pr_name: "",
        other_info: "",
        tenor: "",
        pr_content: "",
        pr_money: ""
      },
      form: [
        {
          type: "avatar",
          prop: "pr_img",
          placeholder: "项目logo",
          upload: this.afterRead
        },
        {
          type: "input",
          label: "项目标题:",
          prop: "pr_name"
        },
        {
          type: "input",
          label: "筹金",
          prop: "pr_money",
          input: this.moneyChange
        },
        {
          type: "textarea",
          label: "项目介绍:",
          prop: "pr_content"
        },
        {
          type: "textarea",
          label: "项目进程:",
          prop: "tenor"
        },
        {
          type: "textarea",
          label: "账单公示:",
          prop: "notice_info"
        },
        {
          type: "textarea",
          label: "其他信息:",
          prop: "other_info"
        },
        {
          type: "action",
          data: [
            {
              text: "发布",
              type: "primary",
              handler: this.release
            }
          ]
        }
      ],
      rules: {
        pr_img: [{ required: true, message: "请上传项目logo", trigger: "blur" }],
        pr_name: [{ required: true, message: "请输入项目名称", trigger: "blur" }],
        pr_content: [{ required: true, message: "请输入项目介绍", trigger: "blur" }],
        pr_money: [{ required: true, message: "请输入项目筹金", trigger: "blur" }]
      }
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    release(valid, value) {
      if (valid) {
        value.pr_img = value.pr_img.map(item => item.id).join(",");
        this.$fetch.form("/Home/Create/pub_add/mcode/ape5f8d94799fb8c.html", value).then(() => {
          this.close();
          this.$emit("success");
        });
      }
      // console.log(value);
    },
    afterRead({ file }, { index }) {
      this.$refs.form.updateField(index, {}, "del");
      let formData = new FormData();
      formData.append("file", file);
      formData.append("is_user", 1);
      this.$fetch
        .post("/Home/Create/upload_ajax_img", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(({ data }) => {
          this.$refs.form.updateField(index, {
            url: data.src,
            id: data.image_id
          });
        })
        .catch(() => {
          this.$refs.form.updateField(index, {
            status: "failed",
            message: "上传失败"
          });
        });
    },
    moneyChange(value) {
      console.log(value.replace(/[^\d]/g, ""));
      this.data.pr_money = value.replace(/[^\d]/g, "");
    }
  }
};
</script>

<style lang="less">
.project-release-popup {
  height: 100vh;
  padding: 20px;
}
</style>
<style lang="less" scoped>
/deep/ .el-form {
  .van-uploader {
    margin: auto;
    .avatar-mask {
      border: 1px solid #999;
    }
    // background-color: #000;
  }
  .el-form-item__label {
    line-height: 20px;
  }
}
</style>
