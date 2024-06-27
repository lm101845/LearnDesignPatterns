/**
 * @Author liming
 * @Date 2024/6/27 10:47
 **/
var sendData = function (data,dealType,dom) {
    //xhr对象，简化版本，IE另行处理
    var xhr = new XMLHttpRequest(),
        url = 'getData.php?mod=userInfo';
    //请求返回事件
    xhr.onload = function (event) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            dealData(xhr.responseText,dealType,dom);
        } else {
            //请求失败
        }
    }
    //拼接请求字符串
    for (var i in data) {
        url += '&' + i + '=' + data[i];
    }
    //连接和传输数据
    xhr.open("post",url,true);
    xhr.send(null);
}