/**
 * @Author liming
 * @Date 2024/6/19 11:50
 **/

var ImageNews = function (url, href, classname) {
    // 继承构造函数
    News.call(this)
    this.url = url || ''
    this.href = href || '#'
    this.classname = classname || 'normal'
    this.init()
}
inheritPrototype(ImageNews, News)

ImageNews.prototype.init = function (){
    this.element = document.createElement('a')
    var img = new Image()
    img.src = this.url
    this.element.appendChild(img)
    this.element.className = 'image-news ' + this.classname
    this.element.href = this.href
}

ImageNews.prototype.add = function () {}

ImageNews.prototype.getElement = function () {}
