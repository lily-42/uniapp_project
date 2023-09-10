<template>
	<view class="files-manage">
		<ul>
			<li @click="goFileList(1)">原文件列表</li>
			<li @click="goFileList(2)">BIN文件列表</li>
			<li @click="goFileList(3)">下载文件列表</li>
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
		//监听下拉刷新
		onPullDownRefresh() {
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		// 监听上拉加载更多
		onReachBottom() {
			if (this.isEnd) {
				return;
			}
			this.currentPage += 1;
			this.pageParams.page = this.currentPage
		},
		onLoad() {

		},
		mounted() {
		},
		methods: {
			// 跳转至资料详情
			goFileList(type) {
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
				border-bottom: 1rpx solid #cccccc;
				padding: 10px;
				font-size: 28rpx;
			}
		}

	}
</style>
