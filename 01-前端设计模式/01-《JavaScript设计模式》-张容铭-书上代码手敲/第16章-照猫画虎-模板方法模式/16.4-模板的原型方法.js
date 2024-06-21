/**
 * @Author liming
 * @Date 2024/6/21 12:05
 **/
//提示框原型方法
Alert.prototype = {
    //创建方法
    init: function () {
        //生成提示框
        this.panel.appendChild(this.closeBtn);
        this.panel.appendChild(this.contentNode);
        this.panel.appendChild(this.confirmBtn);
        //插入页面中
        document.body.appendChild(this.panel);
        //绑定事件
        this.bindEvent();
        //显示提示框
        this.show();
    },
    //绑定事件
    bindEvent: function () {
        var me = this;
        //关闭按钮点击事件
        this.closeBtn.onclick = function () {
            //执行关闭取消方法
            me.fail();
            //隐藏弹层
            me.hide();
        }
        //确定按钮点击事件
        this.confirmBtn.onclick = function () {
            //执行关闭确认方法
            me.success();
            //隐藏弹层
            me.hide();
        }
    },
    //隐藏弹层
    hide: function () {
        this.panel.style.display = 'none';
    },
    //显示弹层
    show: function () {
        this.panel.style.display = 'block';
    }
}