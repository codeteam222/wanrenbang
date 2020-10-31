export default {
  data() {
    return {
      data: [],
      listUrl: "",
      params: {
        p: 0
      },
      loading: false,
      finished: false
    };
  },
  filters: {
    initNum: function(value) {
      if (!value || value == 0) return 0;
      return value;
    },
    initStr: function(value) {
      if (!value || value == 0) return "";
      return value;
    }
  },
  methods: {
    getData() {
      const currentPage = this.params.p;
      const p = currentPage === 0 ? 1 : currentPage + 1;
      if (p === 1) {
        this.data = [];
      }
      this.$fetch
        .get(this.listUrl, {
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
