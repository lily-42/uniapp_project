<template>
	<view class="person-box">
		<!-- 用户信息区域 -->
		<view class="userInfo-box">
			<!-- 背景图 -->
			<img class="bgc-img" :src="backgroundImage" mode="" />
			<!-- <person-design></person-design> -->
			<view class="status_bar">
				<!-- 这里是状态栏 -->
			</view>
			<!-- 页面标题 -->
			<view class="page-title">
				<view class="setting" v-if="userInfo" @click="toSetting">
					<i class="iconfont pig-changyong_shezhi"></i>
				</view>
				<view class="title">
					我的
				</view>
			</view>
			<!-- 个人信息卡片 -->
			<view class="user-info">
				<!-- 用户名称 -->
				<view class="right">
					<template v-if="userInfo">
						<view class="user-detail">
							<!-- 用户名 -->
							<view class="username">
								176xxxx4742
								<!-- {{userInfo.username}} -->
							</view>
						</view>
					</template>
					<template v-else>
						<view class="toLogin" @click="toLogin">去登录</view>
					</template>
				</view>

				<!-- 其它信息区域 -->
				<view class="user-other-info">
					<!-- 用户积分 -->
					<view class="userlevel" @click="toscore">
						<view class="score-num">
							<i class="iconfont pig-jifen1"></i>
							<text class="score-text">{{userlevelInfo.level_score || 0}}</text>
						</view>
						<text class="my-score">我的积分</text>
					</view>
					<u-line direction="col"></u-line>
				</view>
			</view>
		</view>

		<!-- 用户菜单区域 -->
		<view class="user-setting-menu">
			<user-menu></user-menu>
		</view>

	</view>
</template>

<script>
	import moment from 'moment'
    import UserMenu from "./components/UserMenu.vue"
	import {
		getUserSignList,
		userSign
	} from "@/http/api/sign"
	export default {
		data() {
			return {
				show: false,
				backgroundImage: 'https://smallpig.site:9000/navigation/bg/bg-1.jpg',
				show: false, // 签到弹窗
				signList: [],
				toIsSign: false, // 今日是否签到
				today: moment(new Date()).format("YYYY-MM-DD")
			}
		},
		computed: {
			// 用户基本信息
			userInfo() {
				return this.$store.state.userInfo
			},
			// 用户积分信息
			userlevelInfo() {
				return this.$store.state.userlevelInfo
			}
		},
		onShow() {
			let randNum = this.getRandomInt(1, 8);
			this.backgroundImage = `https://smallpig.site:9000/navigation/bg/bg-${randNum}.jpg`;
			// 获取用户签到信息
			if (uni.getStorageSync("token")) {
				this.getUserSignListInfo();
			}
		},
		components: {
			UserMenu
		},
		mounted() {},
		methods: {
			// 获取随机数
			getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1)) + min;
			},
			// 获取用户签到信息
			async getUserSignListInfo() {
				const data = await getUserSignList();
				if (data.code === "00000") {
					if (data.data.length) {
						this.signList = data.data; // 签到列表
						if (this.today == this.signList[0].sign_last) {
							this.toIsSign = true;
						} else {
							this.toIsSign = false;
						}
					} else {
						this.toIsSign = false;
					}
				} else {
					uni.$u.toast("请求签到信息失败！");
				}
			},
			// 跳转到登录页面
			toLogin() {
				uni.navigateTo({
					url: "/pages/login/login"
				})
			},
			// 跳转至设置页面
			toSetting() {
				uni.navigateTo({
					url: `/pages/setting/index`
				})
			},
			// 关闭签到弹窗
			closeDialog() {
				this.show = false;
			},
		},
	}
</script>

<style lang="scss">
	page {
		padding: 0;
	}

	.person-box {
		.userInfo-box {
			width: 100%;
			height: 400rpx;
			position: relative;

			.status_bar {
				height: var(--status-bar-height);
				width: 100%;
			}

			.bgc-img {
				position: absolute;
				opacity: 0.9;
				width: 100%;
				height: 100%;
				border-radius: 100% / 0 0 28% 28%;
			}

			.page-title {
				height: 100rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0 30rpx 0 30rpx;
				box-sizing: border-box;
				position: relative;

				.title {
					font-weight: 600;
					font-size: $uni-font-size-lg;
					color: $uni-bg-color;
					z-index: 2;
				}

				.setting {
					position: absolute;
					left: 40rpx;
					top: 50%;
					transform: translate(0, -50%);
					z-index: 2;

					.pig-changyong_shezhi {
						font-size: 40rpx;
						color: $uni-bg-color;
					}
				}
			}

			.user-info {
				width: 80vw;
				background-color: $uni-bg-color;
				border-radius: 30rpx;
				position: absolute;
				left: 50%;
				top: 66%;
				transform: translate(-50%, 0);
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 20rpx 0 0 0;
				box-shadow: 0 8px 10px rgba(31, 45, 61, 0.2);
			}


			.right {
				height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				.user-detail {
					display: flex;
					flex-direction: column;

					.username {
						font-size: $uni-font-size-lg;
						margin-bottom: 10rpx;
						font-weight: 600;
					}
				}

				.toLogin {
					font-size: $uni-font-size-title;
					font-weight: 800;
					color: $uni-color-primary;
					letter-spacing: 4rpx;
				}
			}

			.user-other-info {
				height: 100rpx;
				width: 80vw;
				margin-top: 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				border-top: 1px solid #ccc;

				.userlevel {
					height: 100%;
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					color: #ccac09;
					font-size: 20rpx;

					.score-num {
						display: flex;

						.iconfont {
							margin-right: 6rpx;
						}

						.score-text {
							display: flex;
							align-items: center;
							padding: 0 0 2rpx 0;
						}
					}

					.my-score {
						font-size: 20rpx;
					}
				}
			}
		}

		.user-setting-menu {
			max-height: 360rpx;
			margin: 240rpx 20rpx 0 20rpx;
			box-shadow: 0 8px 10px rgba(31, 45, 61, 0.2);
			padding: 20rpx;
			box-sizing: border-box;
			border-radius: $uni-border-radius-lg;
		}
	}
</style>
