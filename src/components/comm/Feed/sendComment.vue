<template>
  <div class="send-comment-box" :style="{ 'z-index': zIndex }" @click="open">
    <div v-show="btnVisible" class="comment-btn">评论</div>
    <van-popup
      class="popup-box-comment"
      v-model="visible"
      :safe-area-inset-bottom="true"
      lock-scroll
      position="bottom"
      round
      get-container="body"
    >
      <div class="box">
        <div class="content">
          <div class="left">
            <van-field
              v-model="message"
              rows="3"
              autosize
              type="textarea"
              placeholder="请输入评论"
              maxlength="100"
              show-word-limit
            />
          </div>
          <div class="right">
            <span class="send" @click="send">发送</span>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    },
    cpid: {
      type: String,
      default: ""
    },
    zIndex: {
      type: [String, Number],
      default: 3000
    }
  },
  data() {
    return {
      visible: false,
      btnVisible: true,
      message: "",
      loading: false
    };
  },
  watch: {
    visible(now) {
      if (!now) {
        setTimeout(() => {
          this.btnVisible = true;
        }, 200);
      }
    }
  },
  methods: {
    open() {
      this.visible = true;
      this.btnVisible = false;
    },
    send() {
      if (this.loading) return;
      if (!this.message) {
        this.$notify({ type: "danger", message: "评论内容不能为空" });
        return;
      }
      this.loading = true;
      this.$fetch
        .form("/Home/Create/pub_add/mcode/ape5f8554787a907", {
          n_id: this.id,
          cpid: this.cpid,
          scontent: this.message
        })
        .then(() => {
          this.visible = false;
          this.loading = false;
          this.message = "";
          this.$emit("success");
        })
        .catch(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="less" scoped>
.send-comment-box {
  z-index: 99999;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 14px;
}
.comment-btn {
  height: 40px;
  line-height: 40px;
  background-color: #07c160;
  color: #fff;
}
.popup-box-comment {
  // height: 300px;
  .content {
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .left {
      flex: 1;
      .van-field {
        background-color: #f7f8fa;
      }
    }
    .right {
      font-size: 14px;
      width: 40px;
      padding-left: 10px;
    }
  }
}
</style>
