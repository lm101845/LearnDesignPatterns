/**
 * @Author liming
 * @Date 2024/6/12 11:47
 **/

//定义框架
var A = A || {};
//通过id获取元素
A.g = function (id) {
    return document.getElementById(id);
}

//为元素绑定事件
A.on = function (id, type, fn) {
    //如果传递参数是字符串则以id处理，否则以元素对象处理
    var dom = typeof id === 'string' ? this.g(id) : id;
    //标准DOM2级添加事件方式
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false);
    } else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn);
    } else {
        dom['on' + type] = fn;
    }
}

// 窗口加载完成事件
A.on(window, 'load', function () {
    //按钮点击事件
    A.on('mybutton', 'click', function () {
        //业务逻辑
        console.log('do something');
    });
});