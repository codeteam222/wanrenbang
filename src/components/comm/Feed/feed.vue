<template>
  <div class="feed-item">
    <div class="feed-info">
      <div class="message-box">
        <img class="avatar" :src="data.head_img" />
        <div>
          <div class="nickname">
            {{ data.username }}
            <img class="sex" :src="data.sex_img_src" />
          </div>
          <div class="time">{{ data.add_time }}</div>
        </div>
      </div>
      <div class="action">
        <slot v-bind:data="data"></slot>
      </div>
    </div>
    <div class="feed-content">
      <slot name="content" v-bind:data="data">
        <div class="content" @click="openDetail(data)">{{ data.content }}</div>
      </slot>
      <div class="links" v-if="Array.isArray(data.links) && data.links.length">
        <a v-for="(link, linkIndex) in data.links" :key="linkIndex" :href="link.url" target="_blank">{{
          link.text
        }}</a>
      </div>
      <div class="imgs">
        <div class="img-item" v-for="(imgItem, imgIndex) in data.n_img_data" :key="imgIndex">
          <img :src="imgItem.url" />
        </div>
      </div>
    </div>
    <div class="feed-operation">
      <div v-if="actions.indexOf('share') !== -1" class="share" @click="handleOperation('share', data)">
        <!-- <img src="@/assets/img/share.png" />{{ data.shar || 0 }} -->
        <i class="Hui-iconfont Hui-iconfont-share"></i>{{ data.shar || 0 }}
      </div>
      <div v-if="actions.indexOf('comment') !== -1" class="comment" @click="handleOperation('comment', data)">
        <i class="Hui-iconfont Hui-iconfont-comment"></i>{{ data.commt || 0 }}
        <!-- <img src="@/assets/img/comment.png" />{{ data.commt || 0 }} -->
      </div>
      <div v-if="actions.indexOf('like') !== -1" class="zan" @click="handleOperation(0, data)">
        <van-icon :name="data.is_like ? 'good-job' : 'good-job-o'" />{{ data.like_num || 0 }}
        <!-- <img src="@/assets/img/zan.png" />{{ data.zanNum || 0 }} -->
      </div>
      <div
        v-if="actions.indexOf('collect') !== -1"
        class="like"
        @click="handleOperation(1, data)"
        :class="{ 'is-string': typeof data.collect !== 'number' }"
      >
        <i
          class="Hui-iconfont"
          :class="data.is_collect ? 'Hui-iconfont-cang2-selected' : 'Hui-iconfont-cang2'"
        ></i
        >{{ data.collect_num || 0 }}
        <!-- <img src="@/assets/img/like.png" />{{ data.like || 0 }} -->
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      }
    },
    actions: {
      type: Array,
      default: () => ["share", "comment", "like", "collect"]
    },
    type: {
      type: String
    }
  },
  data() {
    return {
      isUnlock: false
    };
  },
  methods: {
    getDetail(id) {
      return new Promise((resolve, reject) => {
        this.$fetch
          .get(" /Home/Details/invit/mcode/ape5ed661dabd73f", {
            n_id: id
          })
          .then(({ data }) => {
            resolve(data.details);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    openDetail(d) {
      this.getDetail(d.n_id).then(data => {
        this.$emit("detail", data);
      });
    },
    handleOperation(type, item) {
      if (typeof type === "number") {
        const map = {
          0: "like",
          1: "collect"
        };
        this.$fetch
          .form("/Home/Create/pub_add/mcode/ape5f86f3bdec677", {
            n_id: item.n_id,
            log_type: type
          })
          .then(({ code }) => {
            const value = parseInt(item[map[type] + "_num"]);
            if (code === -2) {
              this.$set(item, map[type] + "_num", value - 1);
            } else {
              this.$set(item, map[type] + "_num", value + 1);
            }
            this.$set(item, `is_${map[type]}`, !item[`is_${map[type]}`]);
            this.$emit("action", type, item);
          });
      } else if (type === "comment") {
        this.getDetail(type.n_id).then(data => {
          this.$emit("detail", data);
        });
      }
    },

    unlock() {
      this.isUnlock = true;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/feed.less";
</style>
