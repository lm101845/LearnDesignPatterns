/*
 * @Author: liming
 * @Date: 2021-08-16 21:18:43
 * @LastEditTime: 2021-08-16 21:22:39
 * @FilePath: \01-《JavaScript设计模式》-张容铭-书上代码手敲\第17章：通信卫星-观察者模式\17.3-创建一个观察者.js
 */

//将观察者放在一个闭包中，当页面加载就立即执行
const Observer = ({
    // 防止消息队列暴露而被篡改故将消息容器作为静态私有变量保存
    const  messages = {}

})()