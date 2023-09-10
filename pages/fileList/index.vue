<template>
  <view class="file-list">
    <!-- 搜索框 -->
    <view class="search" v-if="type !== 3">
      <u-search placeholder="设备序列号" v-model="keyword"></u-search>
      <u-button type="primary" @click="uploadFile">上传</u-button>
    </view>
    <view class="select-top" v-else>
      <u-radio-group v-model="value">
        <u-radio name="Bin文件" label="Bin文件"> Bin文件 </u-radio>
        <u-radio name="原文件" label="原文件"> 原文件 </u-radio>
      </u-radio-group>
      <u-button type="primary" @click="downLoadFile">下载</u-button>
    </view>

    <view class="list-content">
      <ul>
        <li v-for="o in 10">文件</li>
      </ul>
    </view>
  </view>
</template>
<script>
// import ArticleContent from "./components/ArticleContent";
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
  components: {
    // ArticleContent
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
          uni.uploadFile({
            url: "https://....",
            files: tempFliePaths, //接受的是数组
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
  },
};
</script>
<style lang="scss">
.file-list {
  font-size: 28rpx;
  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .u-search {
      border: 1rpx solid #cccccc;
      border-radius: 10rpx;
      margin-bottom: 20rpx;
    }
    .u-button {
      width: 140rpx;
      height: 68rpx;
      margin-left: 20rpx;
    }
  }
  .select-top {
    display: flex;
    justify-content: center;
    align-items: center;
    .u-button {
      width: 140rpx;
      height: 68rpx;
      margin-left: 20rpx;
    }
    .u-radio {
      margin-right: 20rpx;
      .u-radio__text {
        font-size: 28rpx !important;
      }
    }
  }

  .list-content {
    li {
      border-bottom: 1rpx solid #cccccc;
      padding: 20rpx;
      font-size: 28rpx;
    }
  }
}
</style>
