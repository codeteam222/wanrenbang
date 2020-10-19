<template>
  <div class="b-collection">
    <c-feed :data="data" @load="load" @action="action"></c-feed>
  </div>
</template>

<script>
import Feed from "@/components/comm/Feed/index";
export default {
  components: {
    "c-feed": Feed
  },
  data() {
    return {
      data: [],
      params: {
        p: 0
      }
    };
  },
  methods: {
    load(done) {
      const currentPage = this.params.p;
      const p = currentPage === 0 ? 1 : currentPage;
      if (p === 1) {
        this.data = [];
      }
      +1;
      this.$fetch
        .get("/Home/api/article", {
          is_collect: 1,
          ...this.params,
          p
        })
        .then(({ data }) => {
          const { article_data, totalpages } = data;
          this.data = this.data.concat(article_data);
          this.params.p = p;
          done(totalpages === p);
        })
        .catch(() => {
          done(true);
        });
    },
    action(type, item) {
      console.log(type, item);
    }
  }
};
</script>
