/**
 * @Author liming
 * @Date 2024/6/25 8:24
 **/
//投票结果状态对象
var ResultState = function () {
    // 判断结果数据
    var States = {
        // 每种状态作为一种独立的状态对象保存，以便可以继续添加新的状态
        state0: function () {
            console.log("这是第1种情况");
        },
        state1: function () {
            console.log("这是第2种情况");
        },
        state2: function () {
            console.log("这是第3种情况");
        },
        state3: function () {
            console.log("这是第4种情况");
        },
    };
    // 获取某一个状态并执行其对应的方法
    function show(result) {
        States["state" + result] && States["state" + result]();
    }
    return {
        // 返回调用状态方法接口
        show: show
    }
}

ResultState().show(3); // 输出：这是第3种情况