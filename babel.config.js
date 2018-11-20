module.exports = function (api) {
  const platform = api.caller(caller => caller.platform);

  if (platform === 'android') {
    return {
      presets: [],
      plugins: ["@babel/plugin-transform-react-jsx",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-flow-strip-types",
        "@babel/plugin-transform-modules-commonjs"]
    }
  }
  return {
    presets: ["module:metro-react-native-babel-preset"]
  }
}
