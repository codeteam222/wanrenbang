<template>
  <div class="project-list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="project-item" v-for="(item, index) in data" :key="index">
        <div class="project-item-info left" @click="detail(item)">
          <div class="title">
            <span style="color:#E91E63;">l</span>
            <span style="color:#5AB963;">l</span>{{ item.pr_name }}<span style="color:#FF9900;">l</span>
            <span style="color:#169BD5;">l</span>&nbsp;
            <span class="ratio" v-if="item.prop">(我占股{{ item.prop || 0 }}%)</span>
          </div>
          <div class="desc">
            {{ item.pr_content }}
          </div>
        </div>
        <div class="project-item-action">
          <div>
            <img :src="item.pr_img_src" alt="" />
            <div class="btn">
              <slot name="action" v-bind:data="item" v-bind:index="index"></slot>
            </div>
          </div>
        </div>
      </div>
    </van-list>
    <detail ref="detail"></detail>
  </div>
</template>

<script>
import detail from "./detail";
export default {
  components: {
    detail
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      finished: false,
      loading: false
    };
  },
  methods: {
    onLoad() {
      this.loading = true;
      this.$emit("load", this.done);
    },
    done(isFinsh = false) {
      this.finished = isFinsh;
      this.loading = false;
    },
    detail(item) {
      this.$refs.detail.open({
        data: item
      });
    },
    reset() {
      console.log(123);
      this.onLoad();
    }
  }
};
</script>

<style lang="less" scoped>
.project-item {
  display: flex;
  justify-content: space-between;
  background-color: rgba(242, 242, 242, 1);
  margin: 2px 0;
  padding: 15px;
  font-size: 14px;
  .left {
    position: relative;
    padding-right: 10px;
    &::before {
      content: "";
      position: absolute;
      display: inline-block;
      width: 1px;
      height: 80%;
      background-color: #ccc;
      right: -5px;
      top: 50%;
      transform: translateY(-50%) scaleX(0.5);
    }
  }
  &-info {
    flex: 1;
    text-align: left;
    .title {
      font-weight: 700;
      color: #000;
      margin-bottom: 10px;
    }
    .ratio {
      color: #f56d91;
    }
    .desc {
      font-size: 12px;
      color: #999;
    }
  }
  &-action {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-right: -15px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .btn {
      margin-top: 10px;
      /deep/ .button {
        width: 80px;
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
}
</style>
