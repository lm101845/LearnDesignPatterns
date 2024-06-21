/**
 * @Author liming
 * @Date 2024/6/21 12:21
 **/

//带有取消按钮的提示框
var CancelAlert = function (data) {
    //继承标题提示框构造函数
    TitleAlert.call(this, data)
    //取消按钮文案
    this.cancel = data.cancel
    //创建取消按钮
    this.cancelBtn = document.createElement('span')
    //为取消按钮添加类
    this.cancelBtn.className = 'cancel'
    //添加取消按钮文案
    this.cancelBtn.innerHTML = this.cancel || '取消'
}

//继承标题提示框原型方法
CancelAlert.prototype = new Alert()
CancelAlert.prototype.init = function () {
    //继承标题提示框init方法
    TitleAlert.prototype.init.call(this)
    //由于取消按钮要添加在末尾，所以在创建完其他dom元素后添加
    this.panel.appendChild(this.cancelBtn)

}

CancelAlert.prototype.bindEvent = function () {
    var me = this
    //继承标题提示框方法
    TitleAlert.prototype.bindEvent.call(this)
    this.cancelBtn.onclick = function () {
        me.fail()
        me.hide()
    }
}
