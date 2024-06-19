/**
 * @Author liming
 * @Date 2024/6/18 11:49
 **/

var News = function () {
    // 子容器
    this.children = [];
    // 当前组件元素
    this.element = null;
}

News.prototype = {
    init: function () {
        throw new Error('请重写你的方法');
    },
    add: function () {
        throw new Error('请重写你的方法');
    },
    getElement:function () {
        throw new Error('请重写你的方法');
    }
}