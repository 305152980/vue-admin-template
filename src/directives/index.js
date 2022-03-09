export const imageerror = {
  // 此钩子函数会在 dom 元素插入页面之后执行。
  // inserted 在 Vue3 中改名为 mounted。
  inserted(dom, options) {
    dom.src = dom.src || options.value
    // 只有 src 有值，并且加载失败的时候，才会触发 onerror 函数。
    dom.onerror = function() {
      // 当图片异常的时候 接收指令传过来的值 让这个值作为头像的备选。
      dom.src = options.value
    }
  },
  // 此钩子函数会在给 image 赋值之后执行。
  // componentUpdated 在 Vue3 中改名为 updated。
  componentUpdated(dom, options) {
    dom.src = dom.src || options.value
    dom.onerror = function() {
      // 当图片异常的时候 接收指令传过来的值 让这个值作为头像的备选。
      dom.src = options.value
    }
  }
}
