/*
 * @Author: liming
 * @Date: 2021-08-16 21:18:43
 * @LastEditTime: 2021-08-16 21:31:05
 * @FilePath: \01-《JavaScript设计模式》-张容铭-书上代码手敲\第17章：通信卫星-观察者模式\17.3-创建一个观察者2.0.js
 */

//将观察者放在一个闭包中，当页面加载就立即执行
const Observer = (function () {
    // 防止消息队列暴露而被篡改故将消息容器作为静态私有变量保存
    const _messages = {}
    return {
        //注册信息接口
        regist: function (type, fn) {
            //如果次消息不存在则应该创建一个该消息类型
            if (typeof _messages[type] !== 'undefined') {
                //将动作推入到该消息对应的动作执行队列中
                _messages[type] = [fn]
            } else {
              //如果此消息存在
              //将动作方法推入到该消息对应的动作执行队列中
                _messages[type].push(fn)
            }
         },
        //发布信息接口
        fire: function (type, args) {
            //如果该消息没有被注册，则返回
            if (!_messages[type]) return
            
        },
        //移除信息接口
        remove: function () { },
    }
})()
