/**
 * @Author liming
 * @Date 2024/6/11 12:04
 **/

//获取事件对象
var getEvent = function (event) {
    //标准浏览器返回event，IE下window.event
    return event || window.event;
}

//获取元素
var getTarget = function (event) {
    var e = getEvent(event);
    //标准浏览器下event.target，IE下event.srcElement
    return e.target || e.srcElement;
}

//阻止默认行为
var preventDefault = function (event) {
    var e = getEvent(event);
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

document.onclick = function (e) {
    //阻止默认行为
    preventDefault(e);
    //获取事件源目标对象
    if (getTarget(e) !== document.getElementById('myinput')) {
        console.log('隐藏弹窗');
    }
}