/**
 * @Author liming
 * @Date 2024/6/20 12:04
 **/

// 享元对象
var Flyweight = (function () {
    // 已创建的元素
    var created = [];

    // 创建一个新的元素
    function create() {
        var dom = document.createElement('div');
        document.getElementById('container').appendChild(dom);
        created.push(dom);
        return dom;
    }

    return {
        getDiv: function () {
            if (created.length < 5) {
                return create();
            } else {
                var div = created.shift();
                created.push(div);
                return div;
            }
        }
    }
})();

// 新闻数据
var articles = ['这是第1条新闻','这是第2条新闻','这是第3条新闻','这是第4条新闻','这是第5条新闻','这是第6条新闻','这是第7条新闻','这是第8条新闻',];  // 假设这里是你的新闻数据

// 当前页数
var currentPage = 0;

// 每页显示的新闻数量
var pageSize = 5;

// 显示新闻
function showNews() {
    var start = currentPage * pageSize;
    var end = start + pageSize;
    for (var i = start; i < end; i++) {
        if (articles[i]) {
            Flyweight.getDiv().innerHTML = articles[i];
        }
    }
}

// 翻页
function nextPage() {
    currentPage++;
    showNews();
}

// 初始化页面
showNews();