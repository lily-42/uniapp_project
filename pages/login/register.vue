<template>
	<view class="register">

		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				文件解析还原平台系统
			</view>
			<!-- 主体 -->
			<view class="main">
				<wInput v-model="phoneData" type="text" maxlength="20" placeholder="请输入手机号"></wInput>
				<wInput v-model="verCode" type="number" maxlength="6" placeholder="验证码" isShowCode ref="runCode"
					@setCode="getVerCode()"></wInput>

			</view>

			<wButton class="wbutton" text="注 册" :rotate="isRotate" @click.native="startReg()"></wButton>

			<!-- 底部信息 -->
			<!-- <view class="footer">
				<text 
					@tap="isShowAgree" 
					class="cuIcon"
					:class="showAgree?'cuIcon-radiobox':'cuIcon-round'"
				> 同意</text>
				<navigator url="" open-type="navigate">《协议》</navigator>
			</view> -->
		</view>
	</view>
</template>

<script>
	let _this;
	import wInput from '../../components/watch-login/watch-input.vue' //input
	import wButton from '../../components/watch-login/watch-button.vue' //button
	import {
		emailCode,
		userRegister
	} from "@/http/api/user.js"
	export default {
		data() {
			return {
				phoneData: '', // 手机号
				verCode: "", //验证码
				showAgree: true, //协议是否选择
				isRotate: false, //是否加载旋转
			}
		},
		components: {
			wInput,
			wButton,
		},
		mounted() {
			_this = this;
		},
		methods: {
			isShowAgree() {
				//是否选择协议
				_this.showAgree = !_this.showAgree;
			},
			// 发送验证码
			async getVerCode() {
				// 判断邮箱格式
				if (!this.phoneData) {
					uni.showToast({
						icon: 'error',
						title: "手机号不能为空",
					});
				} else if (this.phoneData.match(/^1[3-9]\d{9}$/)) {
					this.$refs.runCode.$emit('runCode'); //触发倒计时（一般用于请求成功验证码后调用）
					let params = {
						email: this.phoneData,
					};
					const data = await emailCode(params);
					if (data.code === "00000") {
						uni.showToast({
							icon: 'success',
							title: '验证码发送成功',
						});
					} else {
						uni.showToast({
							icon: 'error',
							title: data.message,
						});
					}
				} else {
					uni.showToast({
						icon: 'error',
						title: "手机号格式错误",
					});
				}
			},
			// 注册
			async startReg() {
				//注册
				if (this.isRotate) {
					//判断是否加载中，避免重复点击请求
					return false;
				}
			
				if (!this.phoneData) {
					uni.showToast({
						icon: 'error',
						title: '手机号不能为空'
					});
					return false;
				}
				if (this.verCode.length != 6) {
					uni.showToast({
						icon: 'error',
						title: '验证码格式错误'
					});
					return false;
				}
				_this.isRotate = true
				let params = {
					username: this.username,
					password: this.passData,
					email: this.phoneData,
					code: this.verCode,
				};
				const data = await userRegister(params);
				if (data.code === "00000") {
					_this.isRotate = false;
					uni.showToast({
						icon: 'success',
						title: '注册成功',
					});
					uni.removeStorageSync('redirectURL');
					setTimeout(() => {
						uni.redirectTo({
							url: "/pages/login/login"
						}, 2000)
					})
				} else {
					_this.isRotate = false;
					uni.showToast({
						icon: 'error',
						title: data.message,
					});
				}
			}
		}
	}
</script>

<style>
	@import url("../../components/watch-login/css/icon.css");
	@import url("./css/main.css");
</style>
