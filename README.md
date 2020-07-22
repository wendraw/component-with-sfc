# component-with-sfc

在上一篇 [组件化之 JSX](https://www.yuque.com/wendraw/fe/component-with-jsx) 中我们讲了 React 实现组件化的风格，React 选择的方案就是 JSX，在 JS 代码里面混入了一等公民 JSX，使得组件的变现力非常强。

其实 Vue 也自己实现了一套组件化的风格方案 [SFC（Single File Component）](https://vuejs.org/v2/guide/single-file-components.html)。它是采用类似 HTML 的方式来描述组件的，template 标签描述结构、style 标签控制样式、script 标签处理交互。
```vue
<!-- my-component.vue -->
<template>
  <div>This will be pre-compiled</div>
</template>
<script src="./my-component.js"></script>
<style src="./my-component.css"></style>
```

更详细的介绍见 [组件化之 SFC](https://www.yuque.com/wendraw/fe/component-with-sfc)
