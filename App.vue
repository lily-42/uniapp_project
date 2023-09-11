<script>
	export default {
		onLaunch: function() {
			// 请求用户信息
			this.init();
		},
		onShow: function() {
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			init() {
				this.$store.dispatch("getUserInfo"); // 获取用户信息
				this.$store.dispatch("getUserlevelInfo"); // 获取用户积分信息
			},
		},
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss"; // 全局样式
	@import url("./static/fonts/iconfont.css"); // 图标

	/*每个页面公共css */
	page {
		background-color: #f2f2f2;
		padding: 30rpx 30rpx;
		box-sizing: border-box;
	}
</style>
