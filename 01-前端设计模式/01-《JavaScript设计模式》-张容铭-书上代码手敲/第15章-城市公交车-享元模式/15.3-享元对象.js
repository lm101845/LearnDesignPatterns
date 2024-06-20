/**
 * @Author liming
 * @Date 2024/6/20 11:59
 **/

var Flyweight = function () {
    //已创建的元素
    var created = [];
    //创建一条新闻包装容器
    function create() {
        var dom = document.createElement('div');
        //将容器插入新闻列表容器中
        document.getElementById('container').appendChild(dom);
        //缓存新创建的元素
        created.push(dom);
        //返回创建的新元素
        return dom;
    }
    return {
        //获取创建新闻元素方法
        getDiv: function () {
            //如果已创建的元素小于当前页面元素总个数，则创建
            if (created.length < 5) {
                return create();
            } else {
                //获取第一个元素，并插入最后面
                var div = created.shift();
                created.push(div);
                return div;
            }
        }
    }
}