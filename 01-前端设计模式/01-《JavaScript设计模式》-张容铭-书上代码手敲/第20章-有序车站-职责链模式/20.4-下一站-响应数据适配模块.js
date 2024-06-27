/**
 * @Author liming
 * @Date 2024/6/27 10:50
 **/
var dealData = function (data, dealType, dom) {
    //对象String方法简化使用
    var dataType = Object.prototype.toString.call(data);
    //判断数据类型
    switch (dealType) {
        //输入框提示功能
        case 'sug'://数组
            //如果数据位数组
            if(dataType === '[object Array]') {
                //创建提示框组件
                return createSug(data, dom);
            }
            //将响应的数据转换为数组
            if(dataType === '[object String]') {
                var newData = []
                for (var i in data){
                    newData.push(data[i])
                }
                //创建提示框组件
                return createSug(newData, dom);
            }
            //将响应的其他数据转换为数组
            return createSug([data],dom)
        case "validate":
            return createValidate(data, dom);
            break
    }
}