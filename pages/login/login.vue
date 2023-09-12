<template>
  <view class="login">
    <view class="content">
      <!-- 头部logo -->
      <view class="header"> 文件解析还原平台系统 </view>
      <!-- 主体表单 -->
      <view class="main">
        <wInput
          v-model="phoneData"
          type="text"
          maxlength="20"
          placeholder="手机号"
          :focus="isFocus"
        ></wInput>
        <wInput
          v-model="verCode"
          type="number"
          maxlength="6"
          placeholder="验证码"
          isShowCode
          ref="runCode"
          @setCode="getVerCode()"
        ></wInput>
      </view>
      <wButton
        class="wbutton"
        text="登 录"
        :rotate="isRotate"
        @click="startLogin"
      ></wButton>

      <!-- 其他登录 -->
      <!-- <view class="other_login cuIcon">
        <view class="login_icon">
          <view class="cuIcon-weixin" @tap="login_weixin"></view>
        </view> -->
      <!-- <view class="login_icon">
					<view class="cuIcon-weibo" @tap="login_weibo"></view>
				</view>
				<view class="login_icon">
					<view class="cuIcon-github" @tap="login_github"></view>
				</view> -->
      <!-- </view> -->

      <!-- 底部信息 -->
      <view class="footer">
        <!-- <navigator url="/pages/login/forget" open-type="navigate"
          >找回密码</navigator
        >
        <text>|</text> -->
        <navigator url="/pages/login/register" open-type="navigate"
          >注册账号</navigator
        >
      </view>
    </view>
  </view>
</template>

<script>
let _this;
import wInput from "../../components/watch-login/watch-input.vue"; //input
import wButton from "../../components/watch-login/watch-button.vue"; //button
import { userLogin, emailCode } from "@/http/api/user.js";
export default {
  data() {
    return {
      phoneData: "18738679009", //手机号
      verCode: "123456", //验证码
      isRotate: false, //是否加载旋转
      isFocus: true, // 是否聚焦
    };
  },
  components: {
    wInput,
    wButton,
  },
  mounted() {
    _this = this;
    //this.isLogin();
  },
  methods: {
    isLogin() {
      //判断缓存中是否登录过，直接登录
      // try {
      // 	const value = uni.getStorageSync('setUserData');
      // 	if (value) {
      // 		//有登录信息
      // 		console.log("已登录用户：",value);
      // 		_this.$store.dispatch("setUserData",value); //存入状态
      // 		uni.reLaunch({
      // 			url: '../../../pages/index',
      // 		});
      // 	}
      // } catch (e) {
      // 	// error
      // }
    },
    // 发送验证码
    async getVerCode() {
      // 判断邮箱格式
      if (!this.phoneData) {
        uni.showToast({
          icon: "error",
          title: "手机号不能为空",
        });
      } else if (this.phoneData.match(/^1[3-9]\d{9}$/)) {
        this.$refs.runCode.$emit("runCode"); //触发倒计时（一般用于请求成功验证码后调用）
        // let params = {
        //   email: this.phoneData,
        // };
        // const data = await emailCode(params);
        const data = {
          code: '00000'
        }
        if (data.code === "00000") {
          uni.showToast({
            icon: "success",
            title: "验证码发送成功",
          });
        } else {
          uni.showToast({
            icon: "error",
            title: data.message,
          });
        }
      } else {
        uni.showToast({
          icon: "error",
          title: "手机号格式错误",
        });
      }
    },
    async startLogin(e) {
      //登录
      if (this.isRotate) {
        //判断是否加载中，避免重复点击请求
        return false;
      }
      if (!this.phoneData) {
        uni.showToast({
          icon: "error",
          title: "手机号不能为空",
        });
        return;
      }
      if (this.verCode.length != 6) {
        uni.showToast({
          icon: "error",
          title: "验证码格式错误",
        });
        return;
      }

      _this.isRotate = true;
      setTimeout(function () {
        _this.isRotate = false;
      }, 3000);
      uni.showLoading({
        title: "登录中",
      });
      let params = {
        phone: this.phoneData,
        password: this.passData,
      };
      // const data = await userLogin(params);
      const data = {
        code: '00000',
        data: {
          token: '123344444'
        }
      }
      if (data.code === "00000") {
        // 登录成功保存token
        const token = data.data.token;
        if (token) {
          this.$store.commit("setAuthorization", token);
        }
        uni.showToast({
          icon: "success",
          position: "bottom",
          title: "登录成功",
        });
        this.$store.dispatch("getUserInfo"); // 获取用户信息
        this.$store.dispatch("getUserlevelInfo"); // 获取用户积分信息
        if (uni.getStorageSync("redirectURL")) {
          uni.navigateBack();
        } else {
          uni.switchTab({
            url: "/pages/index/index",
          });
        }
      } else {
        uni.showToast({
          icon: "error",
          title: data.message,
        });
      }
    },
    login_weixin() {
      //微信登录
      uni.showToast({
        icon: "none",
        position: "bottom",
        title: "...",
      });
    },
    login_weibo() {
      //微博登录
      uni.showToast({
        icon: "none",
        position: "bottom",
        title: "...",
      });
    },
    login_github() {
      //github登录
      uni.showToast({
        icon: "none",
        position: "bottom",
        title: "...",
      });
    },
  },
};
</script>

<style>
@import url("../../components/watch-login/css/icon.css");
@import url("./css/main.css");
</style>
