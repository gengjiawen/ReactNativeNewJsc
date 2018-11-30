module.exports = function (api) {
  // api.cache(true)
  const platform = api.caller(caller => caller.platform);
  console.log(platform);

  if (platform === 'android') {
    return {
      presets: [],
      plugins: ["@babel/plugin-transform-react-jsx",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-transform-flow-strip-types",
        "@babel/plugin-transform-modules-commonjs"]
    }
  }
  return {
    presets: ["module:metro-react-native-babel-preset"]
  }
}
