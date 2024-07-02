/**
 * @Author liming
 * @Date 2024/7/2 12:22
 **/

var showHideNavWidget = function (mod,tag,showOrHide) {
    var mod = document.getElementById(mod);
    var tag = mod.getElementsByTagName(tag);
    showOrHide = (!showOrHide || showOrHide == 'hide') ? 'hidden' :'visible';
    for (var i = 0; i < tag.length; i++) {
        tag[i].style.display = showOrHide;
    }
}

//用户收藏导航模块
(function(){
    //其他交互逻辑
    //订阅隐藏用户收藏导航消息提醒消息
    Mediator.regist('hideAllNavNum',function(){
        showHideNavWidget('collection_nav','strong','hide');
    });

    //订阅显示用户收藏导航消息提醒消息
    Mediator.regist('showAllNavNum',function(){
        showHideNavWidget('collection_nav','strong','show');
    });

    //订阅隐藏用户收藏导航模块
    Mediator.regist('hideNav',function(){
        showHideNavWidget('collection_nav','ul','hide');
    });
})()