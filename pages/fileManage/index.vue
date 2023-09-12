<template>
	<view class="files-manage">
		<ul>
			<li @click="goFileList(1)">原文件列表<u-icon name="arrow-right" size="14"></u-icon></li>
			<li @click="goFileList(2)">BIN文件列表<u-icon name="arrow-right" size="14"></u-icon></li>
			<li @click="goFileList(3)">下载文件列表<u-icon name="arrow-right" size="14"></u-icon></li>
		</ul>
	</view>
</template>

<script>
	export default {
		// 样式穿透
		options: {
			styleIsolation: 'shared'
		},
		data() {
			return {
			}
		},
		onShow(){

		},
		onLoad() {

		},
		mounted() {
		},
		methods: {
			// 跳转至资料详情
			goFileList(type) {
				if (type === 2) {
					uni.navigateTo({
					url: `/pages/fileList/binList?type=${type}`
					})
					return;
				}
				uni.navigateTo({
					url: `/pages/fileList/index?type=${type}`
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		padding: 0;
	}

	.files-manage {
		width: 100%;
		ul {
			li {
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1rpx solid #cccccc;
				padding: 10px;
				font-size: 28rpx;
			}
		}

	}
</style>
