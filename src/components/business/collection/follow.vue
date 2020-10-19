<template>
  <div class="b-follow">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getData">
      <ul class="follow">
        <li v-for="(user, index) in data" :key="index" class="follow-item">
          <img class="avatar" :src="user.head_img_src" />
          <div class="ceil name">{{ user.username }}</div>
          <div class="button" :class="['follow-' + user.is_conc]" @click="follow(user)">
            {{ user.is_conc === 1 ? "已关注" : "关注" }}
          </div>
        </li>
      </ul>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      params: {
        p: 0
      },
      finished: false,
      loading: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      if (this.loading) return;
      const currentPage = this.params.p;
      const p = currentPage === 0 ? 1 : currentPage + 1;
      if (p === 1) {
        this.data = [];
      }
      this.loading = true;
      this.$fetch
        .get("/Home/List/index/mcode/ape5f8a7eae02dda.html", {
          ...this.params,
          p
        })
        .then(({ data }) => {
          this.data = this.data.concat(data.table_data);
          this.finished = data.totalpages === this.params.p;
          this.params.p = p;
          this.loading = false;
        })
        .catch(() => {
          this.finished = true;
          this.loading = false;
        });
    },
    follow(item) {
      this.$fetch
        .form("/Home/Create/pub_add/mcode/ape5f86f3bdec677", {
          mid: item.uid,
          log_type: 2
        })
        .then(({ code }) => {
          const value = code === -2 ? 0 : 1;
          this.$set(item, `is_conc`, value);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.b-follow {
  font-size: 12px;
}
.follow-item {
  display: flex;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.ceil {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.button {
  width: 70px;
  padding: 0;
  height: 25px;
  line-height: 25px;
  text-align: center;
}
.name {
  text-align: left;
  font-weight: 700;
}
.follow-0 {
  background-color: rgba(90, 185, 99, 1);
}
.follow-1 {
  background-color: rgba(252, 140, 168, 1);
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
