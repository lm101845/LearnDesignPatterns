/**
 * @Author liming
 * @Date 2024/7/1 12:10
 **/
function bindIEEvent(dom, type, fn, data) {
    var data = data || {};
    dom.attachEvent('on' + type, function (e) {
        fn.call(dom, e, data);
    });
}

