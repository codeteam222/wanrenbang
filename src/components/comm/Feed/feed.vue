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
      <div v-if="actions.indexOf('like') !== -1" class="zan" @click="handleOperation('like', data)">
        <van-icon :name="data.is_like ? 'good-job' : 'good-job-o'" />{{ data.like || 0 }}
        <!-- <img src="@/assets/img/zan.png" />{{ data.zanNum || 0 }} -->
      </div>
      <div
        v-if="actions.indexOf('collect') !== -1"
        class="like"
        @click="handleOperation('collect', data)"
        :class="{ 'is-string': typeof data.collect !== 'number' }"
      >
        <i
          class="Hui-iconfont"
          :class="data.is_collect ? 'Hui-iconfont-cang2-selected' : 'Hui-iconfont-cang2'"
        ></i
        >{{ data.collect || 0 }}
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
      if (type === "like") {
        if (!item.is_like) {
          this.$set(item, "like", item.like ? item.like + 1 : 1);
        } else {
          this.$set(item, "like", item.like - 1);
        }
        item.is_like = !item.is_like;
      } else if (type === "collect") {
        if (!item.is_collect) {
          typeof item.collect === "number" && this.$set(item, "collect", item.collect ? item.collect + 1 : 1);
        } else {
          typeof item.collect === "number" && this.$set(item, "collect", item.collect - 1);
        }
        this.$set(item, "is_collect", !item.is_collect);
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
