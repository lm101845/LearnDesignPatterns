/**
 * @Author liming
 * @Date 2024/6/28 12:10
 **/

//模块实现模块化
var viewCommand = (function () {
    var tpl = {
        //展示图片结构模板
        product:['<div>','<img src="{#src#}"/>','<p>{#text#}</p>','</div>'].join(''),
        //展示标题结构模板
        title:['<div>','<div>{#title#}</div>','<p>{#text#}</p>','</div>'].join('')
    }

    //格式化字符串缓存字符串
    html = ''
    //格式化字符串方法
    function formateString(str,obj){
        //替换'{#'与'#}'之间的字符串
        return str.replace(/\{#(\w+)#\}/g,function (match,key) {
            return obj[key]
        })
    }
    //方法集合
    var action = {}
    //命令接口
    return function excute(){}
})();