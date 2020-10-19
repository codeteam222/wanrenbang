<template>
  <div class="service-resource">
    <b-banner text="全心全意为用户服务" :src="banner"></b-banner>
    <b-menu :data="category"></b-menu>
    <b-search @change="handleSearch"></b-search>
    <c-feed ref="feed" :data="commentList" @load="load">
      <template v-slot="{ data }">
        <div
          v-if="data.v_type === '0' && data.is_conc !== 2"
          :class="['state', 'state-' + data.is_conc]"
          @click="handlerAction(data)"
        >
          {{ stateMap[data.is_conc] }}
        </div>
        <div v-if="data.v_type === '1'" class="state state-2">广告</div>
      </template>
      <template v-slot:detailAction="{ data }">
        <div
          v-if="data.v_type === '0' && data.is_conc !== 2"
          :class="['state', 'state-' + data.is_conc]"
          @click="handlerAction(data)"
        >
          {{ stateMap[data.is_conc] }}
        </div>
        <div v-if="data.v_type === '1'" class="state state-2">广告</div>
      </template>
    </c-feed>
  </div>
</template>

<script>
import Feed from "@/components/comm/Feed/index";
import BBanner from "./banner";
import BSearch from "./search";
import BMenu from "./menu";
export default {
  components: {
    "c-feed": Feed,
    "b-banner": BBanner,
    "b-search": BSearch,
    "b-menu": BMenu
  },
  props: {
    banner: {
      type: String,
      default: ""
    },
    category: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      commentList: [],
      stateMap: {
        0: "关注",
        1: "已关注"
      },
      params: {
        p: 0
      } /*  */
    };
  },
  methods: {
    handlerAction(data) {
      this.$fetch
        .form("/Home/Create/pub_add/mcode/ape5f86f3bdec677", {
          mid: data.uid,
          log_type: 2
        })
        .then(({ code }) => {
          this.$set(data, "is_conc", code === -2 ? 0 : 1);
        });
    },
    load(done) {
      const currentPage = this.params.p;
      const p = currentPage === 0 ? 1 : currentPage + 1;
      if (p === 1) {
        this.commentList = [];
      }
      this.$fetch
        .get("/Home/Api/article", {
          ...this.params,
          p
        })
        .then(({ data }) => {
          const { article_data, totalpages } = data;
          this.commentList = this.commentList.concat(article_data);
          done(totalpages === p);
          this.params.p = p;
        })
        .catch(() => {
          done(true);
        });
    },
    handleSearch(d) {
      if (d.type === "hot") {
        this.params = {
          p: 0,
          order_field: "like_num",
          order_type: 1
        };
      } else if (d.type === "follow") {
        this.params = {
          p: 0,
          is_conc: 1
        };
      } else if (d.type === "new") {
        this.params = {
          p: 0,
          order_field: "add_time",
          order_type: 1
        };
      }
      this.commentList = [];
      this.$refs.feed.reset();
    }
  }
};
</script>

<style lang="less" scoped>
.state {
  width: 60px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 25px;
  font-size: 12px;
  color: #fff;
}
.state-1 {
  background-color: #cccccc;
}
.state-0 {
  background-color: rgba(90, 185, 99, 1);
}
.state-2 {
  background-color: rgba(255, 153, 0, 1);
}
</style>
