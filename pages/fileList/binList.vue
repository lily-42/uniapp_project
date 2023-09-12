<template>
  <view class="file-list">
    <!-- 搜索框 -->
    <view class="search">
      <u-button
        v-if="type === 2"
        class="operate-btn"
        type="primary"
        @click="BinRepairFile"
        >刷新</u-button
      >
      <u-button
        v-if="type === 2"
        class="operate-btn"
        type="primary"
        @click="BinRepairFile"
        >修复</u-button
      >
      <view class="upload-item" v-if="type === 1 || type === 2">
        <input placeholder="设备序列号" value="" />
        <u-button class="upload-btn" type="primary" @click="uploadFile"
          >上传</u-button
        >
      </view>
    </view>

    <view class="list-content">
      <view class="title">原文件列表</view>
      <view class="source-list">
        <ul>
          <li v-for="(o, index) in 30" :key="index">文件{{ index }}</li>
        </ul>
      </view>
      <view class="title">Bin文件列表</view>
      <view class="bin-list">
        <u-radio-group v-model="selectedFile" @change="chooseFile">
          <u-radio
            v-for="(o, index) in 30"
            :key="index"
            :name="'文件' + index"
            :label="'文件' + index"
          >
            文件{{ index }}
          </u-radio>
        </u-radio-group>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  // 样式穿透
  options: {
    styleIsolation: "shared",
  },
  data() {
    return {
      type: 0,
      title: "文件列表",
      keyword: "",
      value: "Bin文件",
      selectedFile: "",
      serialNum: "",
      scrollTop: "",
      categoryList: [
        {
          name: "原文件列表",
        },
        {
          name: "Bin文件列表",
        },
      ],
      activeIndex: 0,
      list: [
        {
          name: "Bin文件",
        },
        {
          name: "原文件",
        },
      ],
    };
  },
  components: {},
  //监听下拉刷新
  onPullDownRefresh() {},
  onPageScroll(e) {
    this.scrollTop = e.scrollTop;
  },
  // 监听上拉加载更多
  onReachBottom() {
    if (this.isEnd) {
      return;
    }
    this.currentPage += 1;
    this.pageParams.page = this.currentPage;
  },
  onLoad(option) {
    console.log("option", option);

    this.type = Number(option.type);
    if (this.type == 1) {
      this.title = "原文件列表";
    } else if (this.type == 2) {
      this.title = "BIN文件列表";
    } else {
      this.title = "下载文件列表";
    }
    uni.setNavigationBarTitle({
      title: this.title,
    });
  },
  methods: {
    uploadFile() {
      wx.chooseMessageFile({
        count: 10, //限制选择的文件数量
        type: "file", //非图片和视频的文件,不选默认为all
        //type:'video',//视频
        //type:'image',//图片
        success(res) {
          const tempFilePaths = res.tempFiles;
          const fileName = tempFilePaths[0].name;
          console.log("fileName", fileName);
          if (
            fileName.indexOf(".slv") === -1 ||
            fileName.indexOf(".mff") === -1
          ) {
            console.log("仅支持.slv,.mff格式的文件");
          }

          uni.uploadFile({
            url: "https://....",
            files: tempFilePaths, //接受的是数组
            header: {
              "X-Token": "Bearer " + store.state.app.token,
            },
            formData: {
              month: that.date,
            },
            success: (uploadFileRes) => {
              //接口返回的数据
              console.log(uploadFileRes.data);
              //接口返回的状态码
              console.log(uploadFileRes.status);
            },
          });
        },
      });
    },
    downLoadFile() {},
    radioChange() {},
    refresh() {},
    parsSourceFile() {},
    BinRepairFile() {},
    chooseFile() {},
    changeTab() {},
  },
};
</script>
<style lang="scss">
.file-list {
  font-size: 28rpx;
  .search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20rpx;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    .u-search {
      border: 1rpx solid #cccccc;
      border-radius: 10rpx;
      margin-bottom: 20rpx;
    }
    .u-button {
      font-size: 24rpx !important;
      margin: 0;
      margin-right: 20rpx;
      width: 100rpx;
      height: 60rpx;
    }
    .upload-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #cccccc;
      border-radius: 10rpx;
      padding-left: 20rpx;
      margin-right: 20rpx;
      input {
        font-size: 24rpx;
        height: 100%;
      }
      .u-button {
        font-size: 24rpx !important;
        height: 60rpx;
        margin: 0;
      }
    }
    .u-radio-group {
      .u-radio__text {
        font-size: 24rpx !important;
      }
    }
  }

  .list-content {
    margin-top: 100rpx;
    .source-list {
      height: 500rpx;
      overflow-y: scroll;
      border: 1px solid #cccccc;
      background-color: #ffffff;
      border-radius: 20rpx;
      margin-bottom: 40rpx;
      ul {
        li {
          border-bottom: 1rpx solid #cccccc;
          padding: 20rpx;
          font-size: 28rpx;
        }
      }
    }
    .bin-list {
      height: 500rpx;
      overflow-y: scroll;
      border: 1px solid #cccccc;
      background-color: #ffffff;
      border-radius: 20rpx;
      .u-radio-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .u-radio {
          border-bottom: 1rpx solid #cccccc;
          padding: 20rpx;
          font-size: 28rpx;
        }
      }
    }
  }
}
</style>
