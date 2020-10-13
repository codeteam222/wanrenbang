<template>
  <div class="service-resource">
    <b-banner text="全心全意为用户服务" :src="banner"></b-banner>
    <b-menu :data="category"></b-menu>
    <b-search @change="handleSearch"></b-search>
    <c-feed ref="feed" :data="commentList" @load="load">
      <template v-slot="scope">
        <div :class="['state', 'state-' + scope.data.state]" @click="handlerAction(scope.data)">
          {{ stateMap[scope.data.state] }}
        </div>
      </template>
      <template v-slot:detailAction="scope">
        <div :class="['state', 'state-' + scope.data.state]" @click="handlerAction(scope.data)">
          {{ stateMap[scope.data.state] }}
        </div>
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
        1: "已关注",
        2: "广告"
      },
      params: {
        p: 1
      }
    };
  },
  methods: {
    handlerAction(data) {
      if (data.state === 0) {
        this.$set(data, "state", 1);
      } else if (data.state === 1) {
        this.$set(data, "state", 0);
      }
    },
    load(done) {
      const currentPage = this.params.p;
      const p = currentPage === 1 ? 1 : currentPage;
      +1;
      this.$fetch
        .form("/Home/Api/article", {
          ...this.params,
          p
        })
        .then(({ data }) => {
          const { article_data, totalpages } = data;
          this.commentList = this.commentList.concat(article_data);
          if (totalpages === p) {
            done(true);
          }
        })
        .catch(() => {
          done(true);
        });
    },
    handleSearch(d) {
      if (d.type === "hot") {
        this.params = {
          p: 1,
          order_field: "like",
          order_type: 1
        };
      } else if (d.type === "follow") {
        this.params = {
          p: 1,
          collect: 1
        };
      } else if (d.type === "new") {
        this.params = {
          p: 1,
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
