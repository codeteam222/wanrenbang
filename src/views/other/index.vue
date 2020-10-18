<template>
  <div class="other-page">
    <c-popup-layout :title="title" @back="$router.push({ name: 'Service' })">
      <b-banner text="全心全意为用户服务" :src="banner"></b-banner>
      <b-search @change="handleSearch"></b-search>
      <Feed ref="feed" :data="commentList" @load="load">
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
      </Feed>
    </c-popup-layout>
  </div>
</template>

<script>
import PopupLayout from "@/components/comm/PopupLayout";
import Feed from "@/components/comm/Feed/index";
import BBanner from "@/views/Service/components/banner";
import BSearch from "@/views/Service/components/search";
export default {
  components: {
    Feed,
    "c-popup-layout": PopupLayout,
    "b-banner": BBanner,
    "b-search": BSearch
  },
  data() {
    return {
      commentList: [],
      stateMap: {
        0: "关注",
        1: "已关注"
      },
      params: {
        p: 1
      },
      banner: ""
    };
  },
  computed: {
    title() {
      const map = {
        5: "生活服务",
        6: "生活娱乐",
        7: "教育培训",
        8: "教育培训",
        9: "美食",
        10: "汽车",
        11: "商业代办",
        12: "金融服务",
        13: "农副产品",
        14: "个人分享"
      };
      return map[this.$route.query.type];
    }
  },
  created() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      this.$fetch.form("/Home/Api/index").then(({ data }) => {
        this.banner = data.banner_data[0].shulf_src;
      });
    },
    handlerAction(data) {
      if (data.state === 0) {
        this.$set(data, "state", 1);
      } else if (data.state === 1) {
        this.$set(data, "state", 0);
      }
    },
    load(done) {
      const currentPage = this.params.p;
      const p = currentPage === 1 ? 1 : currentPage + 1;
      if (p === 1) {
        this.commentList = [];
      }
      this.$fetch
        .get("/Home/Api/article", {
          ...this.params,
          c_id: this.$route.query.type,
          p
        })
        .then(({ data }) => {
          const { article_data, totalpages } = data;
          this.commentList = this.commentList.concat(article_data);
          if (totalpages === p || !totalpages) {
            done(true);
          }
          this.params.p = p;
        })
        .catch(() => {
          done(true);
        });
    },
    handleSearch(d) {
      if (d.type === "hot") {
        this.params = {
          p: 1,
          order_field: "like_num",
          order_type: 1
        };
      } else if (d.type === "follow") {
        this.params = {
          p: 1,
          is_conc: 1
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
/deep/ .c-menu {
  border-bottom: none;
}
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
