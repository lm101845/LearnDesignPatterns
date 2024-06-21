/**
 * @Author liming
 * @Date 2024/6/21 12:01
 **/


//模板类 基础提示框 data渲染数据

var Alert = function (data) {
    //没有数据则返回,反之后面数据执行
    if (!data) return;
    //设置内容
    this.content = data.content;
    //创建提示框面板
    this.panel = document.createElement('div');
    //创建提示内容组件
    this.contentNode = document.createElement('p');
    //创建确定按钮组件
    this.confirmBtn = document.createElement('span');
    //创建关闭按钮组件
    this.closeBtn = document.createElement('b');
    //为提示框面板添加类
    this.panel.className = 'alert';
    //为关闭按钮添加类
    this.closeBtn.className = 'a-close';
    //为确定按钮添加类
    this.confirmBtn.className = 'a-confirm';
    //为确定按钮添加文案
    this.confirmBtn.innerHTML = data.confirm || '确认';
    //为提示内容添加文本
    this.contentNode.innerHTML = this.content;
    //点击确定按钮执行方法 如果data中有success方法则为success方法，否则为空函数
    this.success = data.success || function () {
    };
    //点击关闭按钮执行方法
    this.fail = data.fail || function () {
    };
}