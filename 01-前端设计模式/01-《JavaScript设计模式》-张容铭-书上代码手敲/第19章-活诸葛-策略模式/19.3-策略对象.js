/**
 * @Author liming
 * @Date 2024/6/26 12:08
 **/
//价格策略对象
var PriceStrategy = function () {
    //内部算法对象
    var strategy = {
        //100返30
        return30: function (price) {
            return +price + parseInt(price / 100) * 30;
        },
        //100返50
        return50: function (price) {
            return +price + parseInt(price / 100) * 50;
        },
        //9折
        percent90: function (price) {
            return price * 100 * 90 / 10000;
        },
        //8折
        percent80: function (price) {
            return price * 100 * 80 / 10000;
        },
        //5折
        percent50: function (price) {
            return price * 100 * 50 / 10000;
        }
    };
    //策略算法调用接口
    return function (algorithm, price) {
        //如果算法存在，则调用算法，否则返回false
        return strategy[algorithm] && strategy[algorithm](price);
    }
}()

//测试
var price = PriceStrategy('return50', '200');
console.log(price)