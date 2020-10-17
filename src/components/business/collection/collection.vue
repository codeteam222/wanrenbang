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
        p: 1
      }
    };
  },
  methods: {
    load(done) {
      const currentPage = this.params.p;
      const p = currentPage === 1 ? 1 : currentPage;
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
          if (totalpages === p) {
            done(true);
          }
          this.params.p = p;
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
{ "code": 1, "msg": "success", "data": { "article_data": [{ "n_id": "19", "n_title": "", "n_img":
"6d70440d3979e766cb91e85ca5128526,b08ac1e81a66a530c11936cbb86023af,d40a67cec07086ee677ba5117bfe53c0",
"content": "\u6d4b\u8bd5\u5185\u5bb93", "c_id": "7", "add_time": "1600571393", "is_delete": "1", "links": "0",
"inc": null, "is_index": "0", "sort": "0", "is_bottom": "0", "n_intr": null, "is_e_top": null, "is_e_mid":
"0", "show_bottom": "0", "url": null, "coin": "12", "sec_img":
"6d70440d3979e766cb91e85ca5128526,b08ac1e81a66a530c11936cbb86023af,d40a67cec07086ee677ba5117bfe53c0",
"sec_content": "\u52a0\u5bc6\u6d4b\u8bd5\u5185\u5bb93", "uid": "329", "like_num": "1", "collect_num": "1",
"commt": "5", "share": "0", "v_type": "0", "username": "test", "phone": "15167813983", "sex": "1", "head_img":
"https:\/\/wx.qlogo.cn\/mmopen\/vi_32\/Q0j4TwGTfTI4P2UibN2w7vjnyWrW2OhI8786U1db5VpPTRM5JKiaXicjk6UZx9icgFia5icyrtia0NBc0ZEiacdiaHIhJVw\/132",
"head_img_src":
"https:\/\/wx.qlogo.cn\/mmopen\/vi_32\/Q0j4TwGTfTI4P2UibN2w7vjnyWrW2OhI8786U1db5VpPTRM5JKiaXicjk6UZx9icgFia5icyrtia0NBc0ZEiacdiaHIhJVw\/132",
"n_img_data": [{ "image_id": "6d70440d3979e766cb91e85ca5128526", "url":
"http:\/\/ljtest11.liuziqian.top\/Uploads\/image\/20200920\/5f66c7b3a8368.png" }, { "image_id":
"b08ac1e81a66a530c11936cbb86023af", "url":
"http:\/\/ljtest11.liuziqian.top\/Uploads\/image\/20200920\/5f66c7b9b3476.png" }, { "image_id":
"d40a67cec07086ee677ba5117bfe53c0", "url":
"http:\/\/ljtest11.liuziqian.top\/Uploads\/image\/20200920\/5f66c7bea3366.png" }], "sex_src":
"http:\/\/ljtest11.liuziqian.top\/Public\/img\/women.png" }, { "n_id": "20", "n_title": "", "n_img":
"8640fa73cf4a6ccef85ed8477a46b964", "content": "222", "c_id": "14", "add_time": "1600571393", "is_delete":
"1", "links": "0", "inc": null, "is_index": "0", "sort": "0", "is_bottom": "0", "n_intr": null, "is_e_top":
null, "is_e_mid": "0", "show_bottom": "0", "url": null, "coin": null, "sec_img": null, "sec_content": null,
"uid": "328", "like_num": "0", "collect_num": "1", "commt": "0", "share": "0", "v_type": "0", "username":
"admin", "phone": "15167813982", "sex": "0", "head_img": "0", "head_img_src":
"http:\/\/ljtest11.liuziqian.top\/Public\/img\/head_img_0.jpg", "n_img_data": [{ "image_id":
"8640fa73cf4a6ccef85ed8477a46b964", "url":
"http:\/\/ljtest11.liuziqian.top\/Uploads\/image\/20200919\/5f661f9aec7db.jpg" }], "sex_src":
"http:\/\/ljtest11.liuziqian.top\/Public\/img\/women.png" }], "totalpages": 1 } }
