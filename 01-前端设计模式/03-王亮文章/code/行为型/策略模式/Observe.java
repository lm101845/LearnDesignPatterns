/**
 * @Author liming
 * @Date 2024/1/22 14:14
 * @Description
 **/

import java.util.ArrayList;

interface Observer {
    public void update();
}
// 提取 Subject 的公共部分
abstract class Subject {
    private ArrayList<Observer> list = new ArrayList<Observer>();
    public void attach(Observer observer){
        list.add(observer);
    }
    public void detach(Observer observer){
        list.remove(observer);
    }
    public void notifyObserver(){
        for(Observer observer : list){
            observer.update();
        }
    }
}
// 具体的公众号，提供写文章和得到文章
class WindLiang extends Subject {
    private String post;

    public void writePost(String p) {
        post = p;
    }

    public String getPost() {
        return post;
    }
}

// 小明
class XiaoMing implements Observer {
    private WindLiang subject;

    XiaoMing(WindLiang sub) {
        subject = sub;
    }
    @Override
    public void update(){
        String post = subject.getPost();
        System.out.println("我收到了" + post + " 并且点了个赞");
    }
}

// 小杨
class XiaoYang implements Observer {
    private WindLiang subject;

    XiaoYang(WindLiang sub) {
        subject = sub;
    }
    @Override
    public void update(){
        String post = subject.getPost();
        System.out.println("我收到了" + post + " 并且转发了");
    }
}

// 小刚
class XiaoGang implements Observer {
    private WindLiang subject;

    XiaoGang(WindLiang sub) {
        subject = sub;
    }
    @Override
    public void update(){
        String post = subject.getPost();
        System.out.println("我收到了" + post + " 并且收藏");
    }
}

public class Observe {
    public static void main(String[] args) {
        WindLiang windliang = new WindLiang(); // Subject
        XiaoMing xiaoMing = new XiaoMing(windliang);
        XiaoYang xiaoYang = new XiaoYang(windliang);
        XiaoGang xiaoGang = new XiaoGang(windliang);

        // 添加观察者
        windliang.attach(xiaoMing);
        windliang.attach(xiaoYang);
        windliang.attach(xiaoGang);

        windliang.writePost("新文章-观察者模式，balabala"); // 更新文章
        windliang.notifyObserver(); // 通知观察者
    }
}
