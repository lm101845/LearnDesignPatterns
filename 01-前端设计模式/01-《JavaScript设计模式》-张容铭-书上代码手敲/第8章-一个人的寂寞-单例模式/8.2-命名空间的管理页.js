/**
 * @Author liming
 * @Date 2024/6/6 8:06
 **/
var Ming = {
    g: function(id) {
        return document.getElementById(id);
    },
    css: function(id, key, value) {
        // g(id).style[key] = value;
        //通过当前对象this来使用g方法
        this.g(id).style[key] = value;
    }
}