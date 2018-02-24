### 个人整理的js工具库

- 参考项目：
  1. https://segmentfault.com/a/1190000011966867
  2. https://github.com/proYang/outils

- #### 目录

- 方法
  - getLengthCN: 获取字符串长度，一个中文两个字符

  - parseQueryString: 解析url中的参数，返回对象
  - stringfyQueryString: 将对象序列化为url参数

  - isEmptyObj: 判断是否为空对象

  - getType: 获取变量的类型，返回字符串（首字母大写）
  - isNumber, isString, isObject, isArray, isFunction, isNull, isUndefined: 判断是否为对应类型

- 兼容
  - base64.js: 兼容 atob 、btoa 的问题，没有打包到min文件中，需单独引入此文件