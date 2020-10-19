<template>
  <div class="personal-message">
    <c-popup-layout title="消息通知" @back="$router.push({ name: 'Personal' })">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getData">
        <div class="message-item" v-for="(message, index) in data" :key="index">
          <div class="thumb">
            <img class="avatar" src="@/assets/img/message.png" alt="" />
          </div>
          <div class="message-info">
            <p class="title">{{ message.mg_content }}</p>
            <p>
              {{ message.mg_title }}
            </p>
            <p>{{ message.add_time }}</p>
          </div>
        </div>
      </van-list>
    </c-popup-layout>
  </div>
</template>

<script>
import PopupLayout from "@/components/comm/PopupLayout";
export default {
  components: {
    "c-popup-layout": PopupLayout
  },
  data() {
    return {
      data: [],
      params: {
        p: 0
      },
      loading: false,
      finished: false
    };
  },
  methods: {
    getData() {
      const currentPage = this.params.p;
      const p = currentPage === 0 ? 1 : currentPage + 1;
      if (p === 1) {
        this.data = [];
      }
      this.$fetch
        .get("/Home/List/index/mcode/ape5f8d628a20a90.html", {
          ...this.params,
          p
        })
        .then(({ data }) => {
          this.data = this.data.concat(data.table_data);
          this.params.p = p;
          this.loading = false;
          this.finished = data.totalpages === this.params.p;
        })
        .catch(() => {
          this.finished = true;
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="less" scoped>
.message-list {
  height: 657px;
  overflow-y: auto;
}
.message-item {
  display: flex;
  justify-items: flex-start;
  padding: 20px 0px;
  background-color: #f7f8fa;
  border-bottom: 1px solid rgb(224, 224, 224);
  .thumb {
    width: 55px;
    height: 55px;
    img {
      width: 40px;
      height: auto;
    }
  }
  .message-info {
    flex: 1;
    text-align: left;
    padding-left: 10px;
    p {
      margin-bottom: 10px;
      font-size: 12px;
      color: #666666;
    }
    .title {
      font-weight: 700;
      font-size: 14px;
    }
  }
}
</style>
