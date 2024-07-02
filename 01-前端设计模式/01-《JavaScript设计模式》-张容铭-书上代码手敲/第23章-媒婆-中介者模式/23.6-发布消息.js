/**
 * @Author liming
 * @Date 2024/7/2 12:26
 **/

//设置层模块
(function () {
    //消息提醒选框
    var hideNum = document.getElementById('hideNum')
    var hideUrl = document.getElementById('hideUrl')

    hideNum.onchange = function () {
        //如果勾选
        if (hideNum.checked) {
           //中介者发布隐藏消息
            Mediator.send('hideAllNavNum')
        }else{
            Mediator.send('showAllNavNum')
        }
    }

    //网址消息提醒选框
    hideUrl.onchange = function () {
        //如果勾选
        if (hideUrl.checked) {
            //中介者发布隐藏消息
            Mediator.send('hideAllNavUrl')
        }else{
            Mediator.send('showAllNavUrl')
        }
    }
})()