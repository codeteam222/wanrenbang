<template>
  <el-form
    ref="form"
    :model="data"
    :rules="rules"
    :label-width="labelWidth"
    :class="classs"
    :label-position="labelPosition"
  >
    <el-form-item
      v-for="(formItem, index) in form"
      :key="index"
      :label="formItem.label"
      :class="['form-item__' + formItem.prop, 'form-item__' + formItem.type]"
      :prop="formItem.prop"
    >
      <!-- 纯文本 -->
      <template v-if="formItem.type === 'text'">
        <template v-if="Array.isArray(formItem.value)">
          <label v-for="(text, textIndex) in formItem.value" :key="textIndex">
            {{ text }}
          </label>
        </template>
        <template v-else>
          {{ formItem.prop ? data[formItem.prop] : formItem.value }}
        </template>
      </template>
      <!-- 文本框、密码框 -->
      <template v-if="formItem.type === 'input' || formItem.type === 'password'">
        <el-input
          v-model="data[formItem.prop]"
          :type="formItem.type === 'input' ? 'text' : formItem.type"
          :placeholder="formItem.placeholder"
          autocomplete="new-password"
          @input="formItem.input"
        >
          <template v-if="formItem.unit" #suffix>
            {{ formItem.unit }}
          </template>
        </el-input>
      </template>
      <!-- 文本域 -->
      <template v-if="formItem.type === 'textarea'">
        <el-input v-model="data[formItem.prop]" type="textarea" :placeholder="formItem.placeholder" :rows="5">
        </el-input>
      </template>
      <!-- 单选框 -->
      <template v-if="formItem.type === 'radio'">
        <el-radio
          v-model="data[formItem.prop]"
          v-for="(radioItem, radioIndex) in formItem.data"
          :key="radioIndex"
          :label="radioItem.label"
        >
          {{ radioItem.text ? radioItem.text : radioItem.label }}
        </el-radio>
      </template>
      <!-- 日期 -->
      <template v-if="formItem.type === 'date'">
        <el-date-picker
          v-model="data[formItem.prop]"
          type="date"
          :placeholder="formItem.placeholder"
          :format="formItem.valueFormat"
          :value-format="formItem.valueFormat || 'yyyy-MM-dd'"
        >
        </el-date-picker>
      </template>
      <!-- 日期 -->
      <template v-if="formItem.type === 'select'">
        <el-select v-model="data[formItem.prop]" :placeholder="formItem.placeholder">
          <el-option
            v-for="(option, key) in formItem.data"
            :key="key"
            :label="option.label"
            :value="option.value"
          ></el-option>
        </el-select>
      </template>
      <template v-if="formItem.type === 'avatar'">
        <van-uploader
          ref="avatar"
          v-model="fileList"
          :max-count="1"
          :preview-full-image="false"
          @delete="deleteImg"
          :after-read="formItem.upload"
        >
          <div class="avatar-mask">{{ formItem.placeholder || "点击更换头像" }}</div>
        </van-uploader>
      </template>
      <!-- 操作 -->
      <template v-if="formItem.type === 'action'">
        <div class="btn-group" :style="{ 'text-align': formItem.position || 'center' }">
          <el-button
            v-for="(buttonItem, buttonIndex) in formItem.data"
            :key="buttonIndex"
            :type="buttonItem.type"
            :icon="buttonItem.icon"
            :class="buttonItem.class"
            @click="handelOperation(buttonItem)"
          >
            {{ buttonItem.text }}
          </el-button>
        </div>
      </template>
      <template v-if="formItem.type === 'slot'">
        <template v-if="formItem.prop === 'after'">
          <slot name="after"></slot>
        </template>
      </template>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "CForm",
  props: {
    data: {
      required: true,
      type: Object,
      default: () => {
        return {};
      }
    },
    form: {
      required: true,
      type: Array,
      default: () => []
    },
    rules: {
      type: Object,
      default: () => {
        return {};
      }
    },
    labelWidth: {
      type: String,
      default: "80px"
    },
    classs: {
      type: String
    },
    labelPosition: {
      type: String,
      default: "right"
    }
  },
  data() {
    return {
      avatar: "",
      countryCodeList: [],
      fileList: []
    };
  },
  watch: {
    form() {
      this.reset();
    }
  },
  methods: {
    a(value) {
      console.log(value);
    },
    reset() {
      this.$nextTick(() => {
        if (this.$refs.gt) {
          let gts = [].concat(this.$refs.gt);
          gts.forEach(item => {
            item.init();
          });
        }
      });
    },
    /**
     * 按钮事件触发
     */
    handelOperation(buttonItem) {
      this.validator(buttonItem);
    },
    /**
     * 校验
     */
    validator(buttonItem) {
      if (typeof buttonItem.validator !== "undefined" && !buttonItem.validator) {
        typeof buttonItem.handler === "function" && buttonItem.handler();
      } else {
        this.$refs.form.validate(valid => {
          if (valid) {
            let data = JSON.parse(JSON.stringify(this.data));
            typeof buttonItem.handler === "function" && buttonItem.handler(valid, data);
          }
        });
      }
    },
    /**
     * 校验是否开启极验证
     * @param {Function} cb 更新校验是否通过状态
     */
    validatateGeetest(cb) {
      const { item } = this.findItem("type", "smscode");
      if (item.state !== 4) {
        this.$refs.gt.updateCheckState(true);
      } else {
        if (!item.propPhone) {
          this.$refs.resetPwdForm.validateField([item.propPhone], message => {
            if (message) {
              this.$message(this.message);
            } else {
              cb(true);
            }
          });
        } else {
          if (!item.phone) {
            this.$message("手机号不能为空");
          } else {
            cb(true);
          }
        }
      }
    },
    /**
     * 极验证校验结果
     * @param {Boolean} valid 极验证校验是否通过
     */
    geetestValidate(valid) {
      console.log(valid);
    },
    /**
     * 重置表单
     */
    resetFields() {
      const refForm = this.$refs.form;
      refForm.clearValidate();
      refForm.resetFields();
    },
    deleteImg() {
      console.log(this.$refs.avatar);
      this.$refs.avatar[0].chooseFile();
    },
    /**
     * 寻找指定form规则
     */
    findItem(key, value) {
      for (let i = 0; i < this.form.length; i++) {
        const item = this.form[i];
        if (item[key] === value) {
          return {
            index: i,
            item
          };
        }
      }
    },
    updateField(index, data, type) {
      if (type === "del") {
        this.fileList.splice(index, 1);
      } else {
        this.$set(this.fileList, index, data);
      }
      this.form.forEach(item => {
        if (item.type === "avatar") {
          this.data[item.prop] = [].concat(this.fileList);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.el-form-item {
  position: relative;
}
/deep/ .el-form-item__label {
  line-height: 40px;
}
/deep/ .el-form-item__content {
  display: flex;
  align-items: center;
  display: inline-block\9\0;
}
.form-item__action {
  width: 100%;
  /deep/ .el-form-item__content,
  .btn-group {
    width: 100%;
  }
}
/deep/ .el-select.input-with-select {
  .el-input--suffix .el-input__inner {
    width: 47px;
    padding-left: 15px;
    padding-right: 0;
    right: 0;
  }
  width: 63px;
  .el-input__icon {
    width: 11px;
  }
  .el-icon-arrow-up {
    font-size: 12px;
    &::before {
      content: "\e790";
    }
  }
  .el-select__caret {
    transform: rotateZ(0deg);
  }
  .el-select-dropdown {
    color: #fff;
    width: 210px;
  }
  .popper__arrow {
    left: 46px !important;
  }
  .el-select-dropdown__item,
  .el-select-dropdown__item.hover,
  .el-select-dropdown__item:hover {
    background-color: transparent;
    color: #000;
  }
}
.form-item__avatar {
  /deep/ .el-form-item__label {
    line-height: 60px;
  }
}
.form-item__radio,
.form-item__checkbox {
  /deep/ .el-form-item__label {
    line-height: 21px;
  }
}
.form-item__action {
  /deep/ .el-form-item__content {
    margin-left: 0 !important;
  }
}
.form-item__avatar {
  margin-bottom: 10px;
}
/deep/ .van-uploader {
  margin-left: 28px;
  .avatar-mask,
  .van-uploader__preview,
  .van-uploader__preview-image {
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 50%;
    line-height: 100px;
    text-align: center;
  }
  .van-image__img {
    width: 100%;
    height: 100%;
  }
  .van-uploader__preview-delete {
    right: 10px;
    top: 4px;
  }
}
</style>
