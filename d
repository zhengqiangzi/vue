[1mdiff --git a/components/mad-user.edit.vue b/components/mad-user.edit.vue[m
[1mindex a7dca78..f443f1d 100644[m
[1m--- a/components/mad-user.edit.vue[m
[1m+++ b/components/mad-user.edit.vue[m
[36m@@ -74,8 +74,7 @@[m [mexport default {[m
   },[m
   beforeRouteEnter:function(to,from,next){[m
 [m
[31m-    console.log(this)[m
[31m-[m
[32m+[m[32m      next()[m
       /* this.$store.dispatch("loadServerData").then(function(){[m
           console.log(arguments);[m
        })*/[m
[1mdiff --git a/dist/index.js b/dist/index.js[m
[1mdeleted file mode 100644[m
[1mindex 2a4a6c3..0000000[m
[1m--- a/dist/index.js[m
[1m+++ /dev/null[m
[36m@@ -1,35944 +0,0 @@[m
[31m-/******/ (function(modules) { // webpackBootstrap[m
[31m-/******/ 	// The module cache[m
[31m-/******/ 	var installedModules = {};[m
[31m-[m
[31m-/******/ 	// The require function[m
[31m-/******/ 	function __webpack_require__(moduleId) {[m
[31m-[m
[31m-/******/ 		// Check if module is in cache[m
[31m-/******/ 		if(installedModules[moduleId])[m
[31m-/******/ 			return installedModules[moduleId].exports;[m
[31m-[m
[31m-/******/ 		// Create a new module (and put it into the cache)[m
[31m-/******/ 		var module = installedModules[moduleId] = {[m
[31m-/******/ 			i: moduleId,[m
[31m-/******/ 			l: false,[m
[31m-/******/ 			exports: {}[m
[31m-/******/ 		};[m
[31m-[m
[31m-/******/ 		// Execute the module function[m
[31m-/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);[m
[31m-[m
[31m-/******/ 		// Flag the module as loaded[m
[31m-/******/ 		module.l = true;[m
[31m-[m
[31m-/******/ 		// Return the exports of the module[m
[31m-/******/ 		return module.exports;[m
[31m-/******/ 	}[m
[31m-[m
[31m-[m
[31m-/******/ 	// expose the modules object (__webpack_modules__)[m
[31m-/******/ 	__webpack_require__.m = modules;[m
[31m-[m
[31m-/******/ 	// expose the module cache[m
[31m-/******/ 	__webpack_require__.c = installedModules;[m
[31m-[m
[31m-/******/ 	// identity function for calling harmory imports with the correct context[m
[31m-/******/ 	__webpack_require__.i = function(value) { return value; };[m
[31m-[m
[31m-/******/ 	// define getter function for harmory exports[m
[31m-/******/ 	__webpack_require__.d = function(exports, name, getter) {[m
[31m-/******/ 		Object.defineProperty(exports, name, {[m
[31m-/******/ 			configurable: false,[m
[31m-/******/ 			enumerable: true,[m
[31m-/******/ 			get: getter[m
[31m-/******/ 		});[m
[31m-/******/ 	};[m
[31m-[m
[31m-/******/ 	// getDefaultExport function for compatibility with non-harmony modules[m
[31m-/******/ 	__webpack_require__.n = function(module) {[m
[31m-/******/ 		var getter = module && module.__esModule ?[m
[31m-/******/ 			function getDefault() { return module['default']; } :[m
[31m-/******/ 			function getModuleExports() { return module; };[m
[31m-/******/ 		__webpack_require__.d(getter, 'a', getter);[m
[31m-/******/ 		return getter;[m
[31m-/******/ 	};[m
[31m-[m
[31m-/******/ 	// Object.prototype.hasOwnProperty.call[m
[31m-/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };[m
[31m-[m
[31m-/******/ 	// __webpack_public_path__[m
[31m-/******/ 	__webpack_require__.p = "./dist";[m
[31m-[m
[31m-/******/ 	// Load entry module and return exports[m
[31m-/******/ 	return __webpack_require__(__webpack_require__.s = 58);[m
[31m-/******/ })[m
[31m-/************************************************************************/[m
[31m-/******/ ([[m
[31m-/* 0 */[m
[31m-/***/ function(module, exports) {[m
[31m-[m
[31m-"use strict";[m
[31m-"use strict";[m
[31m-[m
[31m-/*[m
[31m-	MIT License http://www.opensource.org/licenses/mit-license.php[m
[31m-	Author Tobias Koppers @sokra[m
[31m-*/[m
[31m-// css base code, injected by the css-loader[m
[31m-module.exports = function (useSourceMap) {[m
[31m-	var list = [];[m
[31m-[m
[31m-	// return the list of modules as css string[m
[31m-	list.toString = function toString() {[m
[31m-		return this.map(function (item) {[m
[31m-			var content = cssWithMappingToString(item, useSourceMap);[m
[31m-			if (item[2]) {[m
[31m-				return "@media " + item[2] + "{" + content + "}";[m
[31m-			} else {[m
[31m-				return content;[m
[31m-			}[m
[31m-		}).join("");[m
[31m-	};[m
[31m-[m
[31m-	// import a list of modules into the list[m
[31m-	list.i = function (modules, mediaQuery) {[m
[31m-		if (typeof modules === "string") modules = [[null, modules, ""]];[m
[31m-		var alreadyImportedModules = {};[m
[31m-		for (var i = 0; i < this.length; i++) {[m
[31m-			var id = this[i][0];[m
[31m-			if (typeof id === "number") alreadyImportedModules[id] = true;[m
[31m-		}[m
[31m-		for (i = 0; i < modules.length; i++) {[m
[31m-			var item = modules[i];[m
[31m-			// skip already imported module[m
[31m-			// this implementation is not 100% perfect for weird media query combinations[m
[31m-			//  when a module is imported multiple times with different media queries.[m
[31m-			//  I hope this will never occur (Hey this way we have smaller bundles)[m
[31m-			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {[m
[31m-				if (mediaQuery && !item[2]) {[m
[31m-					item[2] = mediaQuery;[m
[31m-				} else if (mediaQuery) {[m
[31m-					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";[m
[31m-				}[m
[31m-				list.push(item);[m
[31m-			}[m
[31m-		}[m
[31m-	};[m
[31m-	return list;[m
[31m-};[m
[31m-[m
[31m-function cssWithMappingToString(item, useSourceMap) {[m
[31m-	var content = item[1] || '';[m
[31m-	var cssMapping = item[3];[m
[31m-	if (!cssMapping) {[m
[31m-		return content;[m
[31m-	}[m
[31m-[m
[31m-	if (useSourceMap && typeof btoa === 'function') {[m
[31m-		var sourceMapping = toComment(cssMapping);[m
[31m-		var sourceURLs = cssMapping.sources.map(function (source) {[m
[31m-			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';[m
[31m-		});[m
[31m-[m
[31m-		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');[m
[31m-	}[m
[31m-[m
[31m-	return [content].join('\n');[m
[31m-}[m
[31m-[m
[31m-// Adapted from convert-source-map (MIT)[m
[31m-function toComment(sourceMap) {[m
[31m-	// eslint-disable-next-line no-undef[m
[31m-	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));[m
[31m-	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;[m
[31m-[m
[31m-	return '/*# ' + data + ' */';[m
[31m-}[m
[31m-[m
[31m-/***/ },[m
[31m-/* 1 */[m
[31m-/***/ function(module, exports) {[m
[31m-[m
[31m-/* globals __VUE_SSR_CONTEXT__ */[m
[31m-[m
[31m-// this module is a runtime utility for cleaner component module output and will[m
[31m-// be included in the final webpack user bundle[m
[31m-[m
[31m-module.exports = function normalizeComponent ([m
[31m-  rawScriptExports,[m
[31m-  compiledTemplate,[m
[31m-  injectStyles,[m
[31m-  scopeId,[m
[31m-  moduleIdentifier /* server only */[m
[31m-) {[m
[31m-  var esModule[m
[31m-  var scriptExports = rawScriptExports = rawScriptExports || {}[m
[31m-[m
[31m-  // ES6 modules interop[m
[31m-  var type = typeof rawScriptExports.default[m
[31m-  if (type === 'object' || type === 'function') {[m
[31m-    esModule = rawScriptExports[m
[31m-    scriptExports = rawScriptExports.default[m
[31m-  }[m
[31m-[m
[31m-  // Vue.extend constructor export interop[m
[31m-  var options = typeof scriptExports === 'function'[m
[31m-    ? scriptExports.options[m
[31m-    : scriptExports[m
[31m-[m
[31m-  // render functions[m
[31m-  if (compiledTemplate) {[m
[31m-    options.render = compiledTemplate.render[m
[31m-    options.staticRenderFns = compiledTemplate.staticRenderFns[m
[31m-  }[m
[31m-[m
[31m-  // scopedId[m
[31m-  if (scopeId) {[m
[31m-    options._scopeId = scopeId[m
[31m-  }[m
[31m-[m
[31m-  var hook[m
[31m-  if (moduleIdentifier) { // server build[m
[31m-    hook = function (context) {[m
[31m-      // 2.3 injection[m
[31m-      context =[m
[31m-        context || // cached call[m
[31m-        (this.$vnode && this.$vnode.ssrContext) || // stateful[m
[31m-        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional[m
[31m-      // 2.2 with runInNewContext: true[m
[31m-      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {[m
[31m-        context = __VUE_SSR_CONTEXT__[m
[31m-      }[m
[31m-      // inject component styles[m
[31m-      if (injectStyles) {[m
[31m-        injectStyles.call(this, context)[m
[31m-      }[m
[31m-      // register component module identifier for async chunk inferrence[m
[31m-      if (context && context._registeredComponents) {[m
[31m-        context._registeredComponents.add(moduleIdentifier)[m
[31m-      }[m
[31m-    }[m
[31m-    // used by ssr in case component is cached and beforeCreate[m
[31m-    // never gets called[m
[31m-    options._ssrRegister = hook[m
[31m-  } else if (injectStyles) {[m
[31m-    hook = injectStyles[m
[31m-  }[m
[31m-[m
[31m-  if (hook) {[m
[31m-    var functional = options.functional[m
[31m-    var existing = functional[m
[31m-      ? options.render[m
[31m-      : options.beforeCreate[m
[31m-    if (!functional) {[m
[31m-      // inject component registration as beforeCreate hook[m
[31m-      options.beforeCreate = existing[m
[31m-        ? [].concat(existing, hook)[m
[31m-        : [hook][m
[31m-    } else {[m
[31m-      // register for functioal component in vue file[m
[31m-      options.render = function renderWithStyleInjection (h, context) {[m
[31m-        hook.call(context)[m
[31m-        return existing(h, context)[m
[31m-      }[m
[31m-    }[m
[31m-  }[m
[31m-[m
[31m-  return {[m
[31m-    esModule: esModule,[m
[31m-    exports: scriptExports,[m
[31m-    options: options[m
[31m-  }[m
[31m-}[m
[31m-[m
[31m-[m
[31m-/***/ },[m
[31m-/* 2 */[m
[31m-/***/ function(module, exports, __webpack_require__) {[m
[31m-[m
[31m-/*[m
[31m-  MIT License http://www.opensource.org/licenses/mit-license.php[m
[31m-  Author Tobias Koppers @sokra[m
[31m-  Modified by Evan You @yyx990803[m
[31m-*/[m
[31m-[m
[31m-var hasDocument = typeof document !== 'undefined'[m
[31m-[m
[31m-if (typeof DEBUG !== 'undefined' && DEBUG) {[m
[31m-  if (!hasDocument) {[m
[31m-    throw new Error([m
[31m-    'vue-style-loader cannot be used in a non-browser environment. ' +[m
[31m-    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."[m
[31m-  ) }[m
[31m-}[m
[31m-[m
[31m-var listToStyles = __webpack_require__(39)[m
[31m-[m
[31m-/*[m
[31m-type StyleObject = {[m
[31m-  id: number;[m
[31m-  parts: Array<StyleObjectPart>[m
[31m-}[m
[31m-[m
[31m-type StyleObjectPart = {[m
[31m-  css: string;[m
[31m-  media: string;[m
[31m-  sourceMap: ?string[m
[31m-}[m
[31m-*/[m
[31m-[m
[31m-var stylesInDom = {/*[m
[31m-  [id: number]: {[m
[31m-    id: number,[m
[31m-    refs: number,[m
[31m-    parts: Array<(obj?: StyleObjectPart) => void>[m
[31m-  }[m
[31m-*/}[m
[31m-[m
[31m-var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])[m
[31m-var singletonElement = null[m
[31m-var singletonCounter = 0[m
[31m-var isProduction = false[m
[31m-var noop = function () {}[m
[31m-[m
[31m-// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>[m
[31m-// tags it will allow on a page[m
[31m-var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())[m
[31m-[m
[31m-module.exports = function (parentId, list, _isProduction) {[m
[31m-  isProduction = _isProduction[m
[31m-[m
[31m-  var styles = listToStyles(parentId, list)[m
[31m-  addStylesToDom(styles)[m
[31m-[m
[31m-  return function update (newList) {[m
[31m-    var mayRemove = [][m
[31m-    for (var i = 0; i < styles.length; i++) {[m
[31m-      var item = styles[i][m
[31m-      var domStyle = stylesInDom[item.id][m
[31m-      domStyle.refs--[m
[31m-      mayRemove.push(domStyle)[m
[31m-    }[m
[31m-    if (newList) {[m
[31m-      styles = listToStyles(parentId, newList)[m
[31m-      addStylesToDom(styles)[m
[31m-    } else {[m
[31m-      styles = [][m
[31m-    }[m
[31m-    for (var i = 0; i < mayRemove.length; i++) {[m
[31m-      var domStyle = mayRemove[i][m
[31m-      if (domStyle.refs === 0) {[m
[31m-        for (var j = 0; j < domStyle.parts.length; j++) {[m
[31m-          domStyle.parts[j]()[m
[31m-        }[m
[31m-        delete stylesInDom[domStyle.id][m
[31m-      }[m
[31m-    }[m
[31m-  }[m
[31m-}[m
[31m-[m
[31m-function addStylesToDom (styles /* Array<StyleObject> */) {[m
[31m-  for (var i = 0; i < styles.length; i++) {[m
[31m-    var item = styles[i][m
[31m-    var domStyle = stylesInDom[item.id][m
[31m-    if (domStyle) {[m
[31m-      domStyle.refs++[m
[31m-      for (var j = 0; j < domStyle.parts.length; j++) {[m
[31m-        domStyle.parts[j](item.parts[j])[m
[31m-      }[m
[31m-      for (; j < item.parts.length; j++) {[m
[31m-        domStyle.parts.push(addStyle(item.parts[j]))[m
[31m-      }[m
[31m-      if (domStyle.parts.length > item.parts.length) {[m
[31m-        domStyle.parts.length = item.parts.length[m
[31m-      }[m
[31m-    } else {[m
[31m-      var parts = [][m
[31m-      for (var j = 0; j < item.parts.length; j++) {[m
[31m-        parts.push(addStyle(item.parts[j]))[m
[31m-      }[m
[31m-      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }[m
[31m-    }[m
[31m-  }[m
[31m-}[m
[31m-[m
[31m-function createStyleElement () {[m
[31m-  var styleElement = document.createElement('style')[m
[31m-  styleElement.type = 'text/css'[m
[31m-  head.appendChild(styleElement)[m
[31m-  return styleElement[m
[31m-}[m
[31m-[m
[31m-function addStyle (obj /* StyleObjectPart */) {[m
[31m-  var update, remove[m
[31m-  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')[m
[31m-[m
[31m-  if (styleElement) {[m
[31m-    if (isProduction) {[m
[31m-      // has SSR styles and in production mode.[m
[31m-      // simply do nothing.[m
[31m-      return noop[m
[31m-    } else {[m
[31m-      // has SSR styles but in dev mode.[m
[31m-      // for some reason Chrome can't handle source map in server-rendered[m
[31m-      // style tags - source maps in <style> only works if the style tag is[m
[31m-      // created and inserted dynamically. So we remove the server rendered[m
[31m-      // styles and inject new ones.[m
[31m-      styleElement.parentNode.removeChild(styleElement)[m
[31m-    }[m
[31m-  }[m
[31m-[m
[31m-  if (isOldIE) {[m
[31m-    // use singleton mode for IE9.[m
[31m-    var styleIndex = singletonCounter++[m
[31m-    styleElement = singletonElement || (singletonElement = createStyleElement())[m
[31m-    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)[m
[31m-    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)[m
[31m-  } else {[m
[31m-    // use multi-style-tag mode in all other cases[m
[31m-    styleElement = createStyleElement()[m
[31m-    update = applyToTag.bind(null, styleElement)[m
[31m-    remove = function () {[m
[31m-      styleElement.parentNode.removeChild(styleElement)[m
[31m-    }[m
[31m-  }[m
[31m-[m
[31m-  update(obj)[m
[31m-[m
[31m-  return function updateStyle (newObj /* StyleObjectPart */) {[m
[31m-    if (newObj) {[m
[31m-      if (newObj.css === obj.css &&[m
[31m-          newObj.media === obj.media &&[m
[31m-          newObj.sourceMap === obj.sourceMap) {[m
[31m-        return[m
[31m-      }[m
[31m-      update(obj = newObj)[m
[31m-    } else {[m
[31m-      remove()[m
[31m-    }[m
[31m-  }[m
[31m-}[m
[31m-[m
[31m-var replaceText = (function () {[m
[31m-  var textStore = [][m
[31m-[m
[31m-  return fun