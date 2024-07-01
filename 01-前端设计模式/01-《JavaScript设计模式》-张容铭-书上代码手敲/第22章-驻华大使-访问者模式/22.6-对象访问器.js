/**
 * @Author liming
 * @Date 2024/7/1 12:19
 **/

//访问器
var Vistor = (function () {
    return {
        //截取方法
        spllice: function () {
            var args = Array.prototype.slice.call(arguments);
            return Array.prototype.splice.apply(arguments[0],args)
        },
        //追加数据方法
        push: function (){
            //强化类数组对象，使其拥有length属性
            var len = arguments[0].length || 0;
            //添加的数据从arguments中第二个开始
            var args = this.spllice(arguments,1);
            //更改length属性值
            arguments[0].length = len + arguments.length - 1;
            //对第一个参数对象执行push方法
            return Array.prototype.push.apply(arguments[0],args);
        },
        //弹出最后一次添加的元素
        pop: function () {
            //对第一个参数对象执行pop方法
            return Array.prototype.pop.apply(arguments[0]);
        }
    }
})();