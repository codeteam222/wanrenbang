<template>
  <div class="b-fans">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getData">
      <ul class="fans">
        <li v-for="(user, index) in data" :key="index" class="fans-item">
          <img class="avatar" :src="user.head_img_src" />
          <div class="ceil name">{{ user.username }}</div>
          <div class="button" :class="['fans-' + user.is_conc]" @click="follow(user)">
            {{ user.is_conc === 1 ? "取消关注" : "关注" }}
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
      finished: false,
      loading: false,
      params: {
        p: 0
      }
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
        .form("/Home/List/index/mcode/ape5f8a6ed3dee7c.html", {
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
.b-fans {
  font-size: 12px;
}
.fans-item {
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
}
.name {
  text-align: left;
  font-weight: 700;
}
.fans-0 {
  background-color: rgba(109, 117, 241, 1);
}
.fans-1 {
  background-color: rgba(252, 140, 168, 1);
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
