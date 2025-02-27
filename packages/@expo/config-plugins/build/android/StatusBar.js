"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatusBarColor = getStatusBarColor;
exports.getStatusBarStyle = getStatusBarStyle;
exports.getStatusBarTranslucent = getStatusBarTranslucent;
exports.setStatusBarColors = setStatusBarColors;
exports.setStatusBarStyles = setStatusBarStyles;
exports.withStatusBar = void 0;
function _assert() {
  const data = _interopRequireDefault(require("assert"));
  _assert = function () {
    return data;
  };
  return data;
}
function _Colors() {
  const data = require("./Colors");
  _Colors = function () {
    return data;
  };
  return data;
}
function _Styles() {
  const data = require("./Styles");
  _Styles = function () {
    return data;
  };
  return data;
}
function _androidPlugins() {
  const data = require("../plugins/android-plugins");
  _androidPlugins = function () {
    return data;
  };
  return data;
}
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// https://developer.android.com/reference/android/R.attr#colorPrimaryDark
const COLOR_PRIMARY_DARK_KEY = 'colorPrimaryDark';
// https://developer.android.com/reference/android/R.attr#windowLightStatusBar
const WINDOW_LIGHT_STATUS_BAR = 'android:windowLightStatusBar';
// https://developer.android.com/reference/android/R.attr#statusBarColor
const STATUS_BAR_COLOR = 'android:statusBarColor';
const withStatusBar = config => {
  config = withStatusBarColors(config);
  config = withStatusBarStyles(config);
  return config;
};
exports.withStatusBar = withStatusBar;
const withStatusBarColors = config => {
  return (0, _androidPlugins().withAndroidColors)(config, config => {
    config.modResults = setStatusBarColors(config, config.modResults);
    return config;
  });
};
const withStatusBarStyles = config => {
  return (0, _androidPlugins().withAndroidStyles)(config, config => {
    config.modResults = setStatusBarStyles(config, config.modResults);
    return config;
  });
};
function setStatusBarColors(config, colors) {
  return (0, _Colors().assignColorValue)(colors, {
    name: COLOR_PRIMARY_DARK_KEY,
    value: getStatusBarColor(config)
  });
}
function setStatusBarStyles(config, styles) {
  const hexString = getStatusBarColor(config);
  const floatElement = getStatusBarTranslucent(config);
  styles = (0, _Styles().assignStylesValue)(styles, {
    parent: (0, _Styles().getAppThemeGroup)(),
    name: WINDOW_LIGHT_STATUS_BAR,
    value: 'true',
    // Default is light-content, don't need to do anything to set it
    add: getStatusBarStyle(config) === 'dark-content'
  });
  styles = (0, _Styles().assignStylesValue)(styles, {
    parent: (0, _Styles().getAppThemeGroup)(),
    name: STATUS_BAR_COLOR,
    value: floatElement ? '@android:color/transparent' : hexString ?? '@color/colorPrimaryDark',
    // Remove the color if translucent is used
    add: floatElement || !!hexString
  });
  return styles;
}
function getStatusBarColor(config) {
  const backgroundColor = config.androidStatusBar?.backgroundColor;
  if (backgroundColor) {
    // Drop support for translucent
    (0, _assert().default)(backgroundColor !== 'translucent', `androidStatusBar.backgroundColor must be a valid hex string, instead got: "${backgroundColor}"`);
  }
  return backgroundColor;
}

/**
 * Specifies whether the status bar should be "translucent". When true, the status bar is drawn with `position: absolute` and a gray underlay, when false `position: relative` (pushes content down).
 *
 * @default false
 * @param config
 * @returns
 */
function getStatusBarTranslucent(config) {
  return config.androidStatusBar?.translucent ?? false;
}
function getStatusBarStyle(config) {
  return config.androidStatusBar?.barStyle || 'light-content';
}
//# sourceMappingURL=StatusBar.js.map