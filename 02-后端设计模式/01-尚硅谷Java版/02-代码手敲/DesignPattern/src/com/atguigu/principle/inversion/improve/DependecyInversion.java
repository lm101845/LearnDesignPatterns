package com.atguigu.principle.inversion.improve;

/**
 * @Author liming111
 * @Date 2023/7/19 10:14
 **/
public class DependecyInversion {
    public static void main(String[] args) {
        //客户端无需改变
        Person person = new Person();
        person.receive(new Email());

        System.out.println("==================");
        person.receive(new WeiXin());
    }
}

//定义接口
interface IReceiver{
    public String getInfo();   //接口里面的抽象方法
}

class Email implements IReceiver{
    @Override
    public String getInfo(){
        return "电子邮件信息：hello world";
    }
}

//增加微信
class WeiXin implements IReceiver{

    @Override
    public String getInfo() {
        return "微信消息：hello ok";
    }
}
//方法2
class Person{
    //这里我们是对接口的依赖
    public void receive(IReceiver receiver){    //Java 接口作为方法参数
        System.out.println(receiver.getInfo());
    }
}