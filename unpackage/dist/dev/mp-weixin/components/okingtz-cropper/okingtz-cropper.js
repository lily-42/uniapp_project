(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/okingtz-cropper/okingtz-cropper"],{

/***/ 617:
/*!*********************************************************************************!*\
  !*** D:/bli学习/navigation-uniapp/components/okingtz-cropper/okingtz-cropper.vue ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _okingtz_cropper_vue_vue_type_template_id_3e88eb9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./okingtz-cropper.vue?vue&type=template&id=3e88eb9e& */ 618);
/* harmony import */ var _okingtz_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./okingtz-cropper.vue?vue&type=script&lang=js& */ 620);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _okingtz_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _okingtz_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _okingtz_cropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./okingtz-cropper.vue?vue&type=style&index=0&lang=scss& */ 622);
/* harmony import */ var _C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _okingtz_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _okingtz_cropper_vue_vue_type_template_id_3e88eb9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _okingtz_cropper_vue_vue_type_template_id_3e88eb9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _okingtz_cropper_vue_vue_type_template_id_3e88eb9e___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/okingtz-cropper/okingtz-cropper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 618:
/*!****************************************************************************************************************!*\
  !*** D:/bli学习/navigation-uniapp/components/okingtz-cropper/okingtz-cropper.vue?vue&type=template&id=3e88eb9e& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_okingtz_cropper_vue_vue_type_template_id_3e88eb9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./okingtz-cropper.vue?vue&type=template&id=3e88eb9e& */ 619);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_okingtz_cropper_vue_vue_type_template_id_3e88eb9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_okingtz_cropper_vue_vue_type_template_id_3e88eb9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_okingtz_cropper_vue_vue_type_template_id_3e88eb9e___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_okingtz_cropper_vue_vue_type_template_id_3e88eb9e___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 619:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/bli学习/navigation-uniapp/components/okingtz-cropper/okingtz-cropper.vue?vue&type=template&id=3e88eb9e& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uButton: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-button/u-button.vue */ 630))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 620:
/*!**********************************************************************************************************!*\
  !*** D:/bli学习/navigation-uniapp/components/okingtz-cropper/okingtz-cropper.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_okingtz_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./okingtz-cropper.vue?vue&type=script&lang=js& */ 621);
/* harmony import */ var _C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_okingtz_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_okingtz_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_okingtz_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_okingtz_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_okingtz_cropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 621:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/bli学习/navigation-uniapp/components/okingtz-cropper/okingtz-cropper.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var sysInfo = uni.getSystemInfoSync();
var SCREEN_WIDTH = sysInfo.screenWidth;
var PAGE_X,
  // 手按下的x位置
  PAGE_Y,
  // 手按下y的位置 
  PR = sysInfo.pixelRatio,
  // dpi
  T_PAGE_X,
  // 手移动的时候x的位置
  T_PAGE_Y,
  // 手移动的时候Y的位置
  CUT_L,
  // 初始化拖拽元素的left值
  CUT_T,
  // 初始化拖拽元素的top值
  CUT_R,
  // 初始化拖拽元素的
  CUT_B,
  // 初始化拖拽元素的
  CUT_W,
  // 初始化拖拽元素的宽度
  CUT_H,
  //  初始化拖拽元素的高度
  IMG_RATIO,
  // 图片比例
  IMG_REAL_W,
  // 图片实际的宽度
  IMG_REAL_H,
  // 图片实际的高度
  DRAFG_MOVE_RATIO = 1,
  //移动时候的比例,
  INIT_DRAG_POSITION = 200,
  // 初始化屏幕宽度和裁剪区域的宽度之差，用于设置初始化裁剪的宽度
  ORIGINAL_W,
  //原始图片宽度
  ORIGINAL_H,
  //原始图片高度
  DRAW_IMAGE_W = sysInfo.screenWidth; // 设置生成的图片宽度
var _default2 = {
  name: 'OkingtzCropper',
  options: {
    styleIsolation: 'shared'
  },
  props: {
    original: {
      // 是否按照原始大小返回
      type: Boolean,
      default: true
    },
    fixed: {
      // 优先级比较
      type: Boolean,
      default: true
    },
    fixedNumber: {
      type: Array,
      default: function _default() {
        return [1, 1];
      }
    },
    cropWidth: {
      type: Number,
      default: 200
    },
    cropHeight: {
      type: Number,
      default: 200
    },
    minHeight: {
      type: Number,
      default: 20
    },
    minWidth: {
      type: Number,
      default: 20
    },
    saveLoading: {
      type: String,
      default: '图片生成中...'
    },
    selectButtonText: {
      type: String,
      default: '选择照片'
    },
    saveButtonText: {
      type: String,
      default: '上传'
    },
    image: {
      type: String,
      default: ''
    },
    maxCropper: {
      type: Boolean,
      default: false
    },
    fileType: {
      type: String,
      default: 'jpg'
    },
    quality: {
      type: Number,
      default: 1
    }
  },
  /**
   * 页面的初始数据
   */
  data: function data() {
    return {
      imageSrc: '',
      isShowImg: false,
      // 初始化的宽高
      cropperInitW: SCREEN_WIDTH,
      cropperInitH: SCREEN_WIDTH,
      // 动态的宽高
      cropperW: SCREEN_WIDTH,
      cropperH: SCREEN_WIDTH,
      // 动态的left top值
      cropperL: 0,
      cropperT: 0,
      transL: 0,
      transT: 0,
      // 图片缩放值
      scaleP: 0,
      imageW: 200,
      imageH: 200,
      // 裁剪框 宽高
      cutL: 0,
      cutT: 0,
      cutB: SCREEN_WIDTH,
      cutR: '100%',
      qualityWidth: DRAW_IMAGE_W,
      innerAspectRadio: DRAFG_MOVE_RATIO,
      // 图片原始尺寸
      originalW: 0,
      originalH: 0
    };
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},
  mounted: function mounted() {
    var _this = this;
    _this.imageSrc = _this.image;
    _this.loadImage();
  },
  watch: {
    image: function image() {
      var _this = this;
      _this.imageSrc = _this.image;
      _this.loadImage();
    }
  },
  methods: {
    setData: function setData(obj) {
      var that = this;
      Object.keys(obj).forEach(function (key) {
        that.$set(that.$data, key, obj[key]);
      });
    },
    getImage: function getImage() {
      var _this = this;
      uni.showActionSheet({
        itemList: ['拍照', '选择一张照片'],
        success: function success(res) {
          _this.chooseImage(res.tapIndex);
        },
        fail: function fail(res) {
          console.log(res.errMsg);
        }
      });
    },
    chooseImage: function chooseImage(index) {
      var _this = this;
      // 从相册/相机选择
      // 如需直接开相机或直接选相册，请只使用一个选项
      var sourceType = index === 0 ? ['camera'] : ['album'];
      uni.chooseImage({
        count: 1,
        //默认9
        sizeType: ['original', 'compressed'],
        //可以指定是原图还是压缩图，默认二者都有
        sourceType: sourceType,
        success: function success(res) {
          // TODO 真是上传照片
          _this.setData({
            imageSrc: res.tempFilePaths[0]
          });
          _this.loadImage();
        }
      });
    },
    getImageInfoEx: function getImageInfoEx(imageUrl, callBack) {
      uni.getImageInfo({
        src: imageUrl,
        success: function success(res) {
          callBack && callBack(res);
        },
        fail: function fail(err) {
          console.log('err-->', err);
          uni.hideLoading();
        }
      });
    },
    loadImage: function loadImage() {
      var _this = this;
      if (!_this.imageSrc) {
        return;
      }
      uni.showLoading({
        title: '图片加载中...'
      });
      _this.getImageInfoEx(_this.imageSrc, function (res) {
        IMG_RATIO = res.width / res.height;
        ORIGINAL_W = res.width;
        ORIGINAL_H = res.height;
        if (ORIGINAL_W > 1000) {
          ORIGINAL_W = 999;
          ORIGINAL_H = ORIGINAL_W / IMG_RATIO;
        }
        if (ORIGINAL_H > 1000) {
          ORIGINAL_H = 999;
          ORIGINAL_W = ORIGINAL_H * IMG_RATIO;
        }
        if (IMG_RATIO >= 1) {
          IMG_REAL_W = SCREEN_WIDTH;
          IMG_REAL_H = SCREEN_WIDTH / IMG_RATIO;
        } else {
          IMG_REAL_W = SCREEN_WIDTH * IMG_RATIO;
          IMG_REAL_H = SCREEN_WIDTH;
        }
        var minRange = IMG_REAL_W > IMG_REAL_H ? IMG_REAL_W : IMG_REAL_H;
        var cutWidth = 0,
          cutHeight = 0;
        if (_this.fixed) {
          console.log('根据固定比例计算');
          // 固定比例
          cutWidth = _this.cropWidth > IMG_REAL_W ? IMG_REAL_W : _this.cropWidth;
          cutHeight = cutWidth / _this.fixedNumber[0] * _this.fixedNumber[1];
          if (cutHeight > IMG_REAL_H) {
            cutHeight = IMG_REAL_H;
            cutWidth = cutHeight / _this.fixedNumber[1] * _this.fixedNumber[0];
          }
        } else {
          // 非固定比例，按照给定的尺寸来
          cutWidth = _this.cropWidth > IMG_REAL_W ? IMG_REAL_W : _this.cropWidth;
          cutHeight = _this.cropHeight > IMG_REAL_H ? IMG_REAL_H : _this.cropHeight;
        }

        // 最大尺度裁切
        if (_this.maxCropper) {
          if (_this.fixed) {
            cutWidth = IMG_REAL_H > IMG_REAL_W ? IMG_REAL_W : IMG_REAL_H;
            cutHeight = cutWidth;
          } else {
            cutWidth = IMG_REAL_W;
            cutHeight = IMG_REAL_H;
          }
        }
        INIT_DRAG_POSITION = minRange > INIT_DRAG_POSITION ? INIT_DRAG_POSITION : minRange;

        // 根据图片的宽高显示不同的效果   保证图片可以正常显示
        if (IMG_RATIO >= 1) {
          // let cutT = Math.ceil((SCREEN_WIDTH / IMG_RATIO - (SCREEN_WIDTH / IMG_RATIO - INIT_DRAG_POSITION)) / 2);
          var cutT = Math.ceil((SCREEN_WIDTH / IMG_RATIO - cutHeight) / 2);
          var cutB = cutT;
          var cutL = Math.ceil((SCREEN_WIDTH - cutWidth) / 2);
          var cutR = cutL;
          _this.setData({
            cropperW: SCREEN_WIDTH,
            cropperH: SCREEN_WIDTH / IMG_RATIO,
            // 初始化left right
            cropperL: Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH) / 2),
            cropperT: Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH / IMG_RATIO) / 2),
            cutL: cutL,
            cutT: cutT,
            cutR: cutR,
            cutB: cutB,
            // 图片缩放值
            imageW: IMG_REAL_W,
            imageH: IMG_REAL_H,
            // 图片原始尺寸
            originalW: ORIGINAL_W,
            originalH: ORIGINAL_H,
            scaleP: IMG_REAL_W / SCREEN_WIDTH,
            qualityWidth: DRAW_IMAGE_W,
            innerAspectRadio: IMG_RATIO
          });
        } else {
          var _cutL = Math.ceil((SCREEN_WIDTH * IMG_RATIO - cutWidth) / 2);
          var _cutR = _cutL;
          var _cutT = Math.ceil((SCREEN_WIDTH - cutHeight) / 2);
          var _cutB = _cutT;
          _this.setData({
            cropperW: SCREEN_WIDTH * IMG_RATIO,
            cropperH: SCREEN_WIDTH,
            // 初始化left right
            cropperL: Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH * IMG_RATIO) / 2),
            cropperT: Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH) / 2),
            cutL: _cutL,
            cutT: _cutT,
            cutR: _cutR,
            cutB: _cutB,
            // 图片缩放值
            imageW: IMG_REAL_W,
            imageH: IMG_REAL_H,
            // 图片原始尺寸
            originalW: ORIGINAL_W,
            originalH: ORIGINAL_H,
            scaleP: IMG_REAL_W / SCREEN_WIDTH,
            qualityWidth: DRAW_IMAGE_W,
            innerAspectRadio: IMG_RATIO
          });
        }
        _this.setData({
          isShowImg: true
        });
        uni.hideLoading();
      });
    },
    // 拖动时候触发的touchStart事件
    contentStartMove: function contentStartMove(e) {
      PAGE_X = e.touches[0].pageX;
      PAGE_Y = e.touches[0].pageY;
    },
    // 拖动时候触发的touchMove事件
    contentMoveing: function contentMoveing(e) {
      var _this = this;
      var dragLengthX = (PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
      var dragLengthY = (PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
      // 左移
      if (dragLengthX > 0) {
        if (this.cutL - dragLengthX < 0) dragLengthX = this.cutL;
      } else {
        if (this.cutR + dragLengthX < 0) dragLengthX = -this.cutR;
      }
      if (dragLengthY > 0) {
        if (this.cutT - dragLengthY < 0) dragLengthY = this.cutT;
      } else {
        if (this.cutB + dragLengthY < 0) dragLengthY = -this.cutB;
      }
      this.setData({
        cutL: this.cutL - dragLengthX,
        cutT: this.cutT - dragLengthY,
        cutR: this.cutR + dragLengthX,
        cutB: this.cutB + dragLengthY
      });
      PAGE_X = e.touches[0].pageX;
      PAGE_Y = e.touches[0].pageY;
    },
    contentTouchEnd: function contentTouchEnd() {},
    // 获取图片
    getImageInfo: function getImageInfo() {
      var _this = this;
      if (!_this.isShowImg) {
        uni.showToast({
          icon: 'error',
          title: '请选择一张照片'
        });
        return;
      }
      uni.showLoading({
        title: _this.saveLoading
      });
      // 将图片写入画布
      var ctx = uni.createCanvasContext('myCanvas', _this);
      ctx.drawImage(_this.imageSrc, 0, 0, _this.original ? ORIGINAL_W : IMG_REAL_W, _this.original ? ORIGINAL_H : IMG_REAL_H);
      ctx.draw(true, function () {
        // 获取画布要裁剪的位置和宽度   均为百分比 * 画布中图片的宽度    
        // 保证了在微信小程序中裁剪的图片模糊  位置不对的问题 canvasT = (_this.cutT / _this.cropperH) * (_this.imageH / pixelRatio)
        var canvasW = (_this.cropperW - _this.cutL - _this.cutR) / _this.cropperW * (_this.original ? ORIGINAL_W : IMG_REAL_W);
        var canvasH = (_this.cropperH - _this.cutT - _this.cutB) / _this.cropperH * (_this.original ? ORIGINAL_H : IMG_REAL_H);
        var canvasL = _this.cutL / _this.cropperW * (_this.original ? ORIGINAL_W : IMG_REAL_W);
        var canvasT = _this.cutT / _this.cropperH * (_this.original ? ORIGINAL_H : IMG_REAL_H);
        uni.canvasToTempFilePath({
          x: canvasL,
          y: canvasT,
          width: canvasW,
          height: canvasH,
          destWidth: canvasW,
          destHeight: canvasH,
          quality: _this.quality || 1,
          fileType: _this.fileType || 'jpg',
          canvasId: 'myCanvas',
          success: function success(res) {
            console.log("res", res);
            uni.hideLoading();
            _this.$emit('uploadSuccess', res.tempFilePath);
          }
        }, _this);
      });
    },
    // 设置大小的时候触发的touchStart事件
    dragStart: function dragStart(e) {
      T_PAGE_X = e.touches[0].pageX;
      T_PAGE_Y = e.touches[0].pageY;
      CUT_L = this.cutL;
      CUT_R = this.cutR;
      CUT_B = this.cutB;
      CUT_T = this.cutT;
    },
    // 设置大小的时候触发的touchMove事件
    dragMove: function dragMove(e) {
      var _this = this;
      var dragType = e.target.dataset.drag;
      switch (dragType) {
        case 'right':
          _this.dragMoveBottomAndRight(e, 'right');
          break;
        case 'left':
          _this.dragMoveLeftAndBottom(e);
          break;
        case 'top':
          _this.dragMoveTopAndRight(e);
          break;
        case 'bottom':
          _this.dragMoveBottomAndRight(e);
          break;
        case 'rightBottom':
          _this.dragMoveBottomAndRight(e);
          break;
        default:
          break;
      }
    },
    // 上移动
    dragMoveTopAndRight: function dragMoveTopAndRight(e) {
      var _this = this;
      if (_this.fixed) {
        var dragLengthY = (T_PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
        if (CUT_T - dragLengthY < 0) dragLengthY = CUT_T;
        if (CUT_T - dragLengthY > _this.cropperH - _this.cutB) dragLengthY = CUT_T - (_this.cropperH - _this.cutB);
        var dragLengthX = dragLengthY / _this.fixedNumber[1] * _this.fixedNumber[0];
        if (CUT_R - dragLengthX < 0) dragLengthX = CUT_R;
        if (CUT_T - dragLengthY <= 0) {
          return;
        }
        if (CUT_R - dragLengthX <= 0) {
          return;
        }
        var cutR = CUT_R - dragLengthX;
        var cutT = CUT_T - dragLengthY;

        // calc min height and width
        if (_this.cropperH - cutT - _this.cutB < _this.minHeight) {
          cutT = _this.cropperH - _this.cutB - _this.minHeight;
          cutR = _this.cropperW - _this.cutL - _this.minHeight / _this.fixedNumber[1] * _this.fixedNumber[0];
        }
        if (_this.cropperW - _this.cutL - cutR < _this.minWidth) {
          cutR = _this.cropperW - _this.cutL - _this.minWidth;
          cutT = _this.cropperH - _this.cutB - _this.minWidth / _this.fixedNumber[0] * _this.fixedNumber[1];
        }
        this.setData({
          cutR: cutR,
          cutT: cutT
        });
      } else {
        var dragLength = (T_PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
        if (CUT_T - dragLength < 0) dragLength = CUT_T;
        if (CUT_T - dragLength > this.cropperH - this.cutB) dragLength = CUT_T - (this.cropperH - this.cutB);
        var _cutT2 = CUT_T - dragLength;
        if (_this.cropperH - _this.cutB - _cutT2 < _this.minHeight) {
          _cutT2 = _this.cropperH - _this.cutB - _this.minHeight;
        }
        this.setData({
          cutT: _cutT2
        });
      }
    },
    // 左移动
    dragMoveLeftAndBottom: function dragMoveLeftAndBottom(e) {
      var _this = this;
      if (_this.fixed) {
        var dragLengthX = (T_PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
        if (CUT_L - dragLengthX < 0) dragLengthX = CUT_L;
        if (CUT_L - dragLengthX > _this.cropperW - _this.cutR) dragLengthX = CUT_L - (_this.cropperW - _this.cutR);
        var dragLengthY = dragLengthX / _this.fixedNumber[0] * _this.fixedNumber[1];
        if (CUT_B - dragLengthY < 0) dragLengthY = CUT_B;
        if (CUT_L - dragLengthX <= 0) {
          return;
        }
        if (CUT_B - dragLengthY <= 0) {
          return;
        }
        var cutL = CUT_L - dragLengthX;
        var cutB = CUT_B - dragLengthY;

        // calc min height and width
        if (_this.cropperH - cutB - _this.cutT < _this.minHeight) {
          cutB = _this.cropperH - _this.cutT - _this.minHeight;
          cutL = _this.cropperW - _this.cutR - _this.minHeight / _this.fixedNumber[1] * _this.fixedNumber[0];
        }
        if (_this.cropperW - _this.cutR - cutL < _this.minWidth) {
          cutL = _this.cropperW - _this.cutR - _this.minWidth;
          cutB = _this.cropperH - _this.cutT - _this.minWidth / _this.fixedNumber[0] * _this.fixedNumber[1];
        }
        this.setData({
          cutL: cutL,
          cutB: cutB
        });
      } else {
        var dragLength = (T_PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
        if (CUT_L - dragLength < 0) dragLength = CUT_L;
        if (CUT_L - dragLength > this.cropperW - this.cutR) dragLength = CUT_L - (this.cropperW - this.cutR);
        var _cutL2 = CUT_L - dragLength;
        if (_this.cropperW - _this.cutR - _cutL2 < _this.minWidth) {
          _cutL2 = _this.cropperW - _this.cutR - _this.minWidth;
        }
        this.setData({
          cutL: _cutL2
        });
      }
    },
    // 下移动 、下移动
    dragMoveBottomAndRight: function dragMoveBottomAndRight(e, x) {
      var _this = this;
      var cutB = 0,
        cutR = 0,
        cutL = 0,
        cutT = 0;
      if (_this.fixed) {
        if (x && e.touches[0].pageX > 0) {
          var dragLengthX = (T_PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
          var dragLengthY = dragLengthX / _this.fixedNumber[0] * _this.fixedNumber[1];
          if (CUT_B + dragLengthY < 0) dragLengthY = -CUT_B;
          if (CUT_R + dragLengthX < 0) dragLengthX = -CUT_R;
          if (CUT_R + dragLengthX === 0) {
            return;
          }
          if (CUT_B + dragLengthY === 0) {
            return;
          }
          cutB = CUT_B + dragLengthY;
          cutR = CUT_R + dragLengthX;
        }
        if (!x && e.touches[0].pageY > 0) {
          var dragLengthY = (T_PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
          var dragLengthX = dragLengthY / _this.fixedNumber[1] * _this.fixedNumber[0];
          if (CUT_B + dragLengthY < 0) dragLengthY = -CUT_B;
          if (CUT_R + dragLengthX < 0) dragLengthX = -CUT_R;
          // 固定比利时如果一边超出范围直接返回
          if (CUT_R + dragLengthX === 0) {
            return;
          }
          if (CUT_B + dragLengthY === 0) {
            return;
          }
          cutB = CUT_B + dragLengthY;
          cutR = CUT_R + dragLengthX;
        }
        // calc min height and width
        if (_this.cropperH - cutB - _this.cutT < _this.minHeight) {
          cutB = _this.cropperH - _this.cutT - _this.minHeight;
          cutR = _this.cropperW - _this.cutL - _this.minHeight / _this.fixedNumber[1] * _this.fixedNumber[0];
        }
        if (_this.cropperW - cutR - _this.cutL < _this.minWidth) {
          cutR = _this.cropperW - _this.cutL - _this.minWidth;
          cutB = _this.cropperH - _this.cutT - _this.minWidth / _this.fixedNumber[0] * _this.fixedNumber[1];
        }
      } else {
        var dragLengthX = (T_PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
        var dragLengthY = (T_PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
        if (CUT_B + dragLengthY < 0) dragLengthY = -CUT_B;
        if (CUT_R + dragLengthX < 0) dragLengthX = -CUT_R;
        cutB = CUT_B + dragLengthY;
        cutR = CUT_R + dragLengthX;

        // calc min height and width
        if (_this.cropperH - cutB - _this.cutT < _this.minHeight) {
          cutB = _this.cropperH - _this.cutT - _this.minHeight;
          cutR = _this.cropperW - _this.cutL - _this.minWidth;
        }
        if (_this.cropperW - cutR - _this.cutL < _this.minWidth) {
          cutB = _this.cropperH - _this.cutT - _this.minHeight;
          cutR = _this.cropperW - _this.cutL - _this.minWidth;
        }
      }
      this.setData({
        cutB: cutB,
        cutR: cutR
      });
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 622:
/*!*******************************************************************************************************************!*\
  !*** D:/bli学习/navigation-uniapp/components/okingtz-cropper/okingtz-cropper.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_okingtz_cropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./okingtz-cropper.vue?vue&type=style&index=0&lang=scss& */ 623);
/* harmony import */ var _C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_okingtz_cropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_okingtz_cropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_okingtz_cropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_okingtz_cropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_fun_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_okingtz_cropper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 623:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/bli学习/navigation-uniapp/components/okingtz-cropper/okingtz-cropper.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/okingtz-cropper/okingtz-cropper.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/okingtz-cropper/okingtz-cropper-create-component',
    {
        'components/okingtz-cropper/okingtz-cropper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(617))
        })
    },
    [['components/okingtz-cropper/okingtz-cropper-create-component']]
]);
