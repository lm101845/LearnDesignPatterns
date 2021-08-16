/*
 * @Author: liming
 * @Date: 2021-08-16 21:45:11
 * @LastEditTime: 2021-08-16 21:46:21
 * @FilePath: \01-《JavaScript设计模式》-张容铭-书上代码手敲\第17章：通信卫星-观察者模式\17.4-拉出来遛遛.js
 */

//将观察者放在一个闭包中，当页面加载就立即执行
let Observer = (function () {
    // 防止消息队列暴露而被篡改故将消息容器作为静态私有变量保存
    let _messages = {}
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
            //定义消息信息
            let events = {
                type,   //消息类型
                args: args || {}   //消息携带数据
            },
                i = 0,      //消息动作循环变量
                len = _messages[type].length; //消息动作长度
            //遍历消息动作
            for (; i < len; i++) {
                //依次执行注册的消息对应的动作序列
                _messages[type][i].call(this,events)
            }
            

        },
        //移除信息接口
        remove: function () {
            //如果消息动作队列存在
            if (_messages[type] instanceof Array) {
                //从最后一个消息动作遍历
                let i = _messages[type].length - 1
                for (; i >= 0; i--) {
                    //如果存在该动作则在消息动作序列中移除相应动作
                    _messages[type][i] === fn && _messages[type].splice(i,1)
                }
            }
        },
    }
})()

Observer.regist('test', e => {
    console.log(e.type,e.args.);
})