/**
 * @Author liming
 * @Date 2024/6/27 11:08
 **/

var createSug = function (data, dom) {
    var i = 0,
        len = data.length,
        html = '';
    //拼接每一条数据
    for (; i < len; i++) {
        html += '<li>' + data[i] + '</li>';
    }
    //显示提示框
    dom.parentNode.getElementsByTagName('ul')[0].innerHTML = html;
}

var createValidate = function (data, dom) {
    //创建提示信息
    var div = document.createElement('div');
    div.innerHTML = data;
    //将提示信息追加到输入框后面
    dom.parentNode.appendChild(div);
}