<template>
  <div class="feed-item">
    <div class="feed-info">
      <div class="message-box">
        <img class="avatar" :src="data.avatar" />
        <div>
          <div class="nickname">
            {{ data.nickname }}
            <img v-if="data.sex === 0" class="sex" src="@/assets/img/man.png" />
            <img v-if="data.sex === 1" class="sex" src="@/assets/img/women.png" />
          </div>
          <div class="time">{{ data.createTime }}</div>
        </div>
      </div>
      <div class="action">
        <slot v-bind:data="data"></slot>
      </div>
    </div>
    <div class="feed-content" @click="openDetail(data)">
      <slot name="content" v-bind:data="data">
        <div class="content">{{ data.content }}</div>
      </slot>
      <div class="links">
        <a v-for="(link, linkIndex) in data.links" :key="linkIndex" :href="link.url" target="_blank">{{
          link.text
        }}</a>
      </div>
      <div class="imgs">
        <div class="img-item" v-for="(img, imgIndex) in data.imgs" :key="imgIndex">
          <img :src="img" />
        </div>
      </div>
      <div class="lock-content">
        <div v-if="!isUnlock">
          <div class="desc"><label>————</label> 以下内容需要支付<i>3</i>个福利卡解锁 <label>————</label></div>
          <div class="unlock-btn">
            <div class="button button-buy" @click="unlock">解锁</div>
          </div>
        </div>
        <div v-else>
          <div class="desc"><label>————</label> 已解锁内容 <label>————</label></div>
          <div class="feed-content" @click="openDetail(data)">
            <div class="content">{{ data.content }}</div>
            <div class="imgs">
              <div class="img-item" v-for="(img, imgIndex) in data.imgs" :key="imgIndex">
                <img :src="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="feed-operation">
      <div v-if="actions.indexOf('share') !== -1" class="share" @click="handleOperation('share', data)">
        <!-- <img src="@/assets/img/share.png" />{{ data.shareNum || 0 }} -->
        <i class="Hui-iconfont Hui-iconfont-share"></i>{{ data.shareNum || 0 }}
      </div>
      <div v-if="actions.indexOf('comment') !== -1" class="comment" @click="handleOperation('comment', data)">
        <i class="Hui-iconfont Hui-iconfont-comment"></i>{{ data.commentNum || 0 }}
        <!-- <img src="@/assets/img/comment.png" />{{ data.commentNum || 0 }} -->
      </div>
      <div v-if="actions.indexOf('zan') !== -1" class="zan" @click="handleOperation('zan', data)">
        <van-icon :name="data.isZan ? 'good-job' : 'good-job-o'" />{{ data.zanNum || 0 }}
        <!-- <img src="@/assets/img/zan.png" />{{ data.zanNum || 0 }} -->
      </div>
      <div
        v-if="actions.indexOf('like') !== -1"
        class="like"
        @click="handleOperation('like', data)"
        :class="{ 'is-string': typeof data.likeNum !== 'number' }"
      >
        <i
          class="Hui-iconfont"
          :class="data.isLike ? 'Hui-iconfont-cang2-selected' : 'Hui-iconfont-cang2'"
        ></i
        >{{ data.likeNum || 0 }}
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
      default: () => ["share", "comment", "zan", "like"]
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
    openDetail(d) {
      this.$emit("detail", d);
    },
    handleOperation(type, item) {
      if (type === "zan") {
        if (!item.isZan) {
          this.$set(item, "zanNum", item.zanNum ? item.zanNum + 1 : 1);
        } else {
          this.$set(item, "zanNum", item.zanNum - 1);
        }
        item.isZan = !item.isZan;
      } else if (type === "like") {
        if (!item.isLike) {
          typeof item.likeNum === "number" && this.$set(item, "likeNum", item.likeNum ? item.likeNum + 1 : 1);
        } else {
          typeof item.likeNum === "number" && this.$set(item, "likeNum", item.likeNum - 1);
        }
        this.$set(item, "isLike", !item.isLike);
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
.lock-content {
  .desc {
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    margin-top: 15px;
    margin-bottom: 10px;
    i {
      color: #fc8ca8;
    }
    label {
      color: #6d75f1;
    }
  }
  .unlock-btn {
    text-align: center;
    .button {
      width: 100px;
      margin: auto;
      font-size: 14px;
      border-radius: 5px;
      margin-top: 10px;
      padding: 5px;
    }
  }
}
</style>
