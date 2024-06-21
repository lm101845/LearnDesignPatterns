/**
 * @Author liming
 * @Date 2024/6/21 12:15
 **/

//右侧按钮提示框
var RightAlert = function (data) {
    //继承基本提示框构造函数
    Alert.call(this, data);
    //为确认按钮添加right类设置位置居右
    this.confirmButton.className = this.confirmButton.className + ' right';
}

//继承基本提示框
RightAlert.prototype = new Alert();

//标题提示框
var TitleAlert = function (data) {
    //继承基本提示框构造函数
    Alert.call(this, data);
    //设置标题内容
    this.titleNode = document.createElement('h3');
    this.titleNode.innerHTML = data.title;
}

//继承基本提示框
TitleAlert.prototype = new Alert();

//对基本提示框创建方法进行重写
TitleAlert.prototype.init = function () {
    //首先创建基本提示框
    Alert.prototype.create.call(this);
    //插入标题
    this.panel.insertBefore(this.titleNode, this.panel.firstChild);
}