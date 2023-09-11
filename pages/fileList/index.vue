<template>
  <view class="file-list">
    <!-- 搜索框 -->
    <view class="search" v-if="type !== 3">
      <u-button class="refresh-btn" type="primary" @click="refresh"
        >刷新</u-button
      >
      <view class="upload-item">
        <input placeholder="设备序列号" value="" />
        <u-button class="upload-btn" type="primary" @click="uploadFile"
          >上传</u-button
        >
      </view>
    </view>
    <view class="select-top" v-else>
      <u-radio-group v-model="value">
        <u-radio name="Bin文件" label="Bin文件"> Bin文件 </u-radio>
        <u-radio name="原文件" label="原文件"> 原文件 </u-radio>
      </u-radio-group>
    </view>

    <view class="list-content">
      <ul>
        <li v-for="o in 10">
          <span class="file-name">文件</span>
          <span
            class="operate-button"
            v-if="type === 1"
            type="primary"
            @click="parsSourceFile"
            >解析源文件</span
          >
          <span
            class="operate-button"
            v-if="type === 2"
            type="primary"
            @click="BinRepairFile"
            >Bin修复源文件</span
          >
          <span
            class="operate-button"
            v-if="type === 3"
            type="primary"
            @click="downLoadFile"
            >下载</span
          >
        </li>
      </ul>
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
      serialNum: "",
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
    width: 100%;
    height: 40rpx;
    .u-search {
      border: 1rpx solid #cccccc;
      border-radius: 10rpx;
      margin-bottom: 20rpx;
    }
    .u-button {
      margin: 0;
      margin-right: 40rpx;
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
      input {
        height: 100%;
      }
      .u-button {
        width: 100rpx;
        height: 60rpx;
        margin: 0;
      }
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
    margin-top: 20rpx;
    ul {
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1rpx solid #cccccc;
        padding: 20rpx;
        font-size: 28rpx;
        .operate-button {
          font-size: 24rpx;
          color: #3c9cff;
        }
      }
    }
  }
}
</style>
