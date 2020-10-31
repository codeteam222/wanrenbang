<template>
  <div class="project-detail">
    <van-popup
      class="popup-feed-detail"
      v-model="visible"
      position="right"
      :safe-area-inset-bottom="true"
      :close-on-click-overlay="false"
      lock-scroll
      get-container="body"
    >
      <c-popup-layout :title="data.pr_name" @back="close">
        <div class="logo">
          <img :src="data.head_img_src" />
          <div class="name">
            <span style="color:#E91E63;">l</span><span style="color:#5AB963;">l</span
            ><span>{{ data.pr_name }}</span
            ><span style="color:#FF9900;">l</span><span style="color:#2892EE;">l</span>
          </div>
        </div>
        <div class="section desc">
          <div class="title"><span style="color:#5AB963;">l</span>项目概述</div>
          <div class="content">{{ data.pr_content }}</div>
        </div>
        <div class="section plan">
          <div class="title"><span style="color:#E91E63;">l</span>项目进程</div>
          <div class="content">{{ data.tenor }}</div>
        </div>
        <div class="section bill">
          <div class="title"><span style="color:#2892EE;">l</span>账单公示</div>
          <div class="content">{{ data.pr_content }}</div>
        </div>
        <div class="section desc">
          <div class="title"><span style="color:#FFC000;">l</span>其他信息</div>
          <div class="content">{{ data.other_info }}</div>
        </div>
        <div class="section shareholder ">
          <div class="title"><span style="color:#6D75F1;">l</span>所有股东</div>
          <div class="content">
            <div class="img-list">
              <img v-for="(item, index) in data.img" :key="index" :src="item" />
              <span class="more">...</span>
            </div>
          </div>
        </div>
      </c-popup-layout>
    </van-popup>
  </div>
</template>

<script>
import PopupLayout from "@/components/comm/PopupLayout";
export default {
  name: "CFeedDetail",
  components: {
    "c-popup-layout": PopupLayout
  },
  data() {
    return {
      data: {},
      visible: false
    };
  },
  methods: {
    open(v) {
      this.data = v.data;
      this.getData();
      this.visible = true;
    },
    close() {
      this.visible = false;
      this.data = {};
      this.$emit("close");
    },
    getData() {
      this.$fetch
        .get("Home/Details/index/mcode/ape5f8d94799fb8c", {
          pr_id: this.data.pr_id
        })
        .then(({ data }) => {
          this.data = Object.assign({}, this.data, data.details, {
            img: [
              "http://ljtest11.liuziqian.top/Public/img/head_img_0.jpg",
              "http://ljtest11.liuziqian.top/Public/img/head_img_0.jpg",
              "http://ljtest11.liuziqian.top/Public/img/head_img_0.jpg",
              "http://ljtest11.liuziqian.top/Public/img/head_img_0.jpg",
              "http://ljtest11.liuziqian.top/Public/img/head_img_0.jpg"
            ]
          });
        });
    }
  }
};
</script>
<style lang="less"></style>
<style lang="less" scoped>
.logo {
  padding-top: 30px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .name {
    margin-top: 10px;
  }
}
.section {
  .title {
    font-weight: 700;
  }
  .content {
    margin-top: 10px;
    color: #999999;
    font-size: 12px;
  }
}
.img-list {
  display: flex;
  justify-content: flex-start;
  // align-items: center;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .more {
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    background-color: rgb(204, 204, 204);
    color: #fff;
    font-weight: 700;
    font-size: 18px;
  }
}
</style>
