# React Native with new jsc 
[![CircleCI](https://circleci.com/gh/gengjiawen/ReactNativeNewJsc.svg?style=svg)](https://circleci.com/gh/gengjiawen/ReactNativeNewJsc)

The jsc support full es6 feature and 64bit support.

Thanks to @Kudo with the hard work https://github.com/react-community/jsc-android-buildscripts/pull/66.

Also @kmagiera, @DanielZlotin and everyone working on https://github.com/react-community/jsc-android-buildscripts.

## Try it using 
I have tested it on api 16 on x86 cpu and api 28 on x86_64 cpu.
Test it before you want to make it go to production.
```
yarn add gengjiawen/react-native#feature/new_jsc
```
copy to `babel.config.js` and delete `.babelrc` (credits goto @satya164).

## Debug script
visit http://127.0.0.1:8081/index.bundle?platform=android&dev=true&minify=false

Related links:
* https://github.com/facebook/react-native/pull/22334
* https://github.com/facebook/metro/issues/190
